import { z } from 'zod'

export const companyCreateScheme = z.object({
  company_name: z.string(),
  company_code: z.string(),
  type: z.string(),
  email: z.string(),
  website: z.string(),
  status: z.enum(['active', 'inactive']),
  logo: z.string(),
  price_per_area: z.preprocess((val) => Number(val), z.number()),
  discount: z.preprocess((val) => Number(val), z.number()),
  discountUnit: z.enum(['percent', 'number']),
})

export const companyUpdateScheme = z.object({
  company_name: z.string(),
  company_code: z.string(),
  type: z.string(),
  email: z.string(),
  website: z.string(),
  status: z.enum(['active', 'inactive']),
  logo: z.string(),
  price_per_area: z.preprocess((val) => Number(val), z.number()),
  discount: z.preprocess((val) => Number(val), z.number()),
  discountUnit: z.enum(['percent', 'number']),
})

export const companyUpdateStatusScheme = z.object({
  status: z.enum(['active', 'inactive']),
})
