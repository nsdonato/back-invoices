import { PrismaClient } from '@prisma/client'
import type { Invoice } from './types'

const prisma = new PrismaClient()

async function getAllInvoicesController(): Promise<Invoice[]> {
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
}

export { getAllInvoicesController }
