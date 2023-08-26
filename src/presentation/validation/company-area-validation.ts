import { z } from 'zod'

export const companyAreaCreateScheme = z.object({
  company_id: z.string(),
  name: z.string(),
  pit_total: z.number(),
  location: z.string(),
  description: z.string(),
  status: z.enum(['active', 'inactive']),
})

export const companyAreaUpdateScheme = z.object({
  company_id: z.string(),
  name: z.string(),
  pit_total: z.number(),
  location: z.string(),
  description: z.string(),
  status: z.enum(['active', 'inactive']),
})

export const companyAreaUpdateStatusScheme = z.object({
  status: z.enum(['active', 'inactive']),
})
