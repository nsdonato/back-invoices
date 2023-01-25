import { NextFunction, Request, Response } from 'express'
import {
  getAllInvoicesController,
  getDetailInvoiceController
} from './controller'

async function getAllInvoices(
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const invoices = await getAllInvoicesController()
    res.status(200).json({
      ok: true,
      data: invoices
    })
  } catch (error: unknown) {
    next(error)
  }
}

async function getDetailInvoice(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { id } = req.params
    const invoice = await getDetailInvoiceController({ id: String(id) })
    res.status(200).json({
      ok: true,
      data: invoice
    })
  } catch (error: unknown) {
    next(error)
  }
}

export { getAllInvoices, getDetailInvoice }
