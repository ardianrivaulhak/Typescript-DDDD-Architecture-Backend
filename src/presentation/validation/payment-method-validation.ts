import { z } from 'zod'

export const paymentMethodCreateScheme = z.object({
  name: z.string(),
})

export const paymentMethodUpdateScheme = z.object({
  name: z.string(),
})
