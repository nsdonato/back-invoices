/* eslint-disable @typescript-eslint/no-misused-promises */
/* TODO: tocaría revisar si hay alguna forma mejor de resolver este problema, por el momento lo dejaré así */
import { Router } from 'express'
import { getAllInvoices } from './http'

const invoicesRouter = Router()

invoicesRouter.get('/', getAllInvoices)

export { invoicesRouter }
