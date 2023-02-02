import { NextFunction, Request, Response } from 'express'
import {
  createInvoiceController,
  getAllInvoicesController,
  getDetailInvoiceController
} from './controller'
import { CreateInvoiceDTO } from './types'

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

async function createInvoice(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const payload = req.body
    const invoice = await createInvoiceController(payload as CreateInvoiceDTO)
    res.status(200).json({
      ok: true,
      data: invoice
    })
  } catch (error: unknown) {
    next(error)
  }
}

export { getAllInvoices, getDetailInvoice, createInvoice }
