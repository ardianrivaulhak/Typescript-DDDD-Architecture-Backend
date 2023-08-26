import { z } from 'zod'

export const moduleCreateScheme = z.object({
  name: z.string(),
  icon: z.string(),
  url: z
    .string()
    .nullable()
    .transform((value) => value ?? undefined),
  active: z.boolean().default(true),
  parent_id: z
    .string()
    .nullable()
    .transform((value) => value ?? undefined),
})

export const moduleUpdateScheme = z.object({
  name: z.string(),
  icon: z.string(),
  url: z
    .string()
    .nullable()
    .transform((value) => value ?? undefined),
  active: z.boolean().default(true),
  parent_id: z
    .string()
    .nullable()
    .transform((value) => value ?? undefined),
})
