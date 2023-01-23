import { Router } from 'express'
import { getAllInvoices } from './http'

const invoicesRouter = Router()

invoicesRouter.get('/', getAllInvoices)

export { invoicesRouter }
