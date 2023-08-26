import { Application } from 'express'
import { injectable } from 'inversify'
import { APP_HOST, APP_PORT } from '../libs/utils'
import { container } from '../container'
import { Bootstrap } from './bootstrap'
import { Routes } from './routes/routes'

export interface IServer {
  start(): Application
}
@injectable()
export class Server implements IServer {
  start(): Application {
    const app = new Bootstrap(container.resolve<Routes>(Routes)).app
    app.set('port', APP_PORT)
    app.listen(<any>APP_PORT, APP_HOST, () => {
      console.log(`Server started at port ${APP_PORT}`)
    })
    return app
  }
}
