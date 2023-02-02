import { NextFunction, Request, Response } from 'express'
import {
  deleteInvoiceByIdController,
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

async function deleteInvoiceById(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { id } = req.params
    const invoice = await deleteInvoiceByIdController({ invoiceId: id })
    res.send(invoice).status(200)
  } catch (error) {
    next(error)
  }
}

export { getAllInvoices, getDetailInvoice, deleteInvoiceById }
