import { AppError } from '@models/app-error'
import { PrismaClient } from '@prisma/client'
import type { Invoice } from './types'

const prisma = new PrismaClient()

async function getAllInvoicesController(): Promise<Invoice[]> {
  try {
    const invoices = await prisma.invoice.findMany({
      select: {
        id: true,
        paymentDue: true,
        status: true,
        total: true,
        client: {
          select: {
            name: true
          }
        }
      }
    })
    return invoices
  } catch (error: unknown) {
    throw new AppError({ message: String(error), status: 500 })
  }
}

export { getAllInvoicesController }
