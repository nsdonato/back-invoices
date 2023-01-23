/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { AppError } from '@models/app-error'
import { getAllInvoicesController } from './controller'

async function getAllInvoices(_req: Request, res: Response): Promise<Response> {
  try {
    const invoices = await getAllInvoicesController()
    return res.status(200).json({
      ok: true,
      data: invoices
    })
  } catch (error: any) {
    throw new AppError({ message: error.message, status: 500 })
  }
}

export { getAllInvoices }
