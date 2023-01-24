import { NextFunction, Request, Response } from 'express'
import { getAllInvoicesController } from './controller'

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

export { getAllInvoices }
