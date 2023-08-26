import * as bodyParser from 'body-parser'
import express, { Request, Response, NextFunction } from 'express'
import { Routes } from './routes/routes'
import { AppError } from '../libs/exceptions/app-error'
import { errorHandler } from '../libs/exceptions/error-handler'
import { logger } from '../infrastructure/logging/winston'
import { APP_URL_PREFIX } from '../libs/utils'
import path from 'path'

export class Bootstrap {
  public app = express()

  constructor(private appRoutes: Routes) {
    this.app = express()
    this.middleware()
    this.setRoutes()
    this.middlewareError()
  }

  private middleware(): void {
    const requestLogger = (
      request: Request,
      response: Response,
      next: NextFunction,
    ) => {
      response.removeHeader('x-powered-by')
      response.header('Access-Control-Allow-Origin', '*')
      response.header(
        'Access-Control-Allow-Headers',
        'content-type, Authorization',
      )
      console.log(`${request.method} url:: ${request.url}`)
      next()
    }
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: false }))

    /** Serve your public path folder if needed */
    // this.app.use(express.static(path.join(__dirname, '../../public')))

    this.app.use(requestLogger)
  }

  private middlewareError(): void {
    const errorLogger = (
      error: AppError,
      request: Request,
      response: Response,
      next: NextFunction,
    ) => {
      logger.error(error.error)
      next(error) // calling next middleware
    }

    const errorResponder = (
      error: AppError,
      request: Request,
      response: Response,
      next: NextFunction,
    ) => {
      errorHandler.handleError(error, response)
    }

    const invalidPathHandler = (
      request: Request,
      response: Response,
      next: NextFunction,
    ) => {
      response.status(400)
      response.json({
        message: 'invalid path',
      })
    }

    this.app.use(errorLogger)
    this.app.use(errorResponder)
    this.app.use(invalidPathHandler)
  }

  private setRoutes(): void {
    const router = express.Router()
    this.appRoutes.setRoutes(router)
    this.app.use(APP_URL_PREFIX, router)

    /** Serve your frontend here if needed */
    // this.app.get('*', (req, res) => {
    //   res.sendFile(path.join(__dirname, '../../public/index.html'))
    // })
  }
}
