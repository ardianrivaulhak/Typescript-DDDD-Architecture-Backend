import { z } from 'zod'

export const paymentCreateScheme = z.object({
  company_id: z.string(),
  invoice_id: z.string(),
  status: z.enum(['accepted', 'rejected', 'pending', 'confirmed']),
  payment_method_id: z.string(),
  account_source: z.string(),
  account_name: z.string(),
  account_no: z.string(),
  payment_date: z.preprocess((arg) => {
    if (typeof arg == 'string' || arg instanceof Date) return new Date(arg)
  }, z.date()),
  total_payment: z.preprocess((val) => Number(val), z.number()),
  attachment: z
    .string()
    .nullish()
    .nullable()
    .transform((value) => value ?? undefined),
})

export const paymentUpdateScheme = z.object({
  company_id: z.string(),
  invoice_id: z.string(),
  status: z.enum(['accepted', 'rejected', 'pending', 'confirmed']),
  payment_method_id: z.string(),
  account_source: z.string(),
  account_name: z.string(),
  account_no: z.string(),
  payment_date: z.preprocess((arg) => {
    if (typeof arg == 'string' || arg instanceof Date) return new Date(arg)
  }, z.date()),
  total_payment: z.preprocess((val) => Number(val), z.number()),
  attachment: z
    .string()
    .nullish()
    .nullable()
    .transform((value) => value ?? undefined),
})

export const paymentUpdateStatusScheme = z.object({
  status: z.enum(['accepted', 'rejected', 'pending', 'confirmed']),
})
