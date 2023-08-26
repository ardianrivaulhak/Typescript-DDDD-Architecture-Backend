import { z } from 'zod'

export const authValidation = z.object({
  username: z.string().nullish(),
  email: z.string().nullish(),
  password: z.string(),
})
