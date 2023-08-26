import { z } from 'zod'

export const companyServerCreateScheme = z.object({
  company_id: z.string(),
  rest_api_url: z.string(),
  web_admin_url: z.string(),
  status: z.string(),
})

export const companyServerUpdateScheme = z.object({
  company_id: z.string(),
  rest_api_url: z.string(),
  web_admin_url: z.string(),
  status: z.string(),
})
