import { z } from 'zod'

export const companyAreaShiftCreateScheme = z.object({
  company_area_id: z.string(),
  name: z.string(),
  start_time: z.string(),
  end_time: z.string(),
})

export const companyAreaShiftUpdateScheme = z.object({
  company_area_id: z.string(),
  name: z.string(),
  start_time: z.string(),
  end_time: z.string(),
})
