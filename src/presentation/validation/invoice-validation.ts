import { z } from 'zod'

export const invoiceCreateScheme = z.object({
  company_id: z.string(),
  invoice_no: z.string(),
  issue_date: z.preprocess((arg) => {
    if (typeof arg == 'string' || arg instanceof Date) return new Date(arg)
  }, z.date()),
  due_date: z.preprocess((arg) => {
    if (typeof arg == 'string' || arg instanceof Date) return new Date(arg)
  }, z.date()),
  next_issue_at: z.preprocess((arg) => {
    if (typeof arg == 'string' || arg instanceof Date) return new Date(arg)
  }, z.date()),
  tax: z.number(),
})

export const invoiceUpdateScheme = z.object({
  company_id: z.string(),
  invoice_no: z.string(),
  issue_date: z.preprocess((arg) => {
    if (typeof arg == 'string' || arg instanceof Date) return new Date(arg)
  }, z.date()),
  due_date: z.preprocess((arg) => {
    if (typeof arg == 'string' || arg instanceof Date) return new Date(arg)
  }, z.date()),
  next_issue_at: z.preprocess((arg) => {
    if (typeof arg == 'string' || arg instanceof Date) return new Date(arg)
  }, z.date()),
  tax: z.number(),
})
