import { AppError } from '@models/app-error'
import { PrismaClient } from '@prisma/client'
import type { Invoice, Client, InvoiceItem, Address } from './types'

const prisma = new PrismaClient()

async function getInvoiceById({
  invoiceId
}: {
  invoiceId: string
}): Promise<Invoice | null> {
  const invoice = await prisma.invoice.findUnique({
    where: {
      id: invoiceId
    }
  })
  return invoice
}

async function getClientById({
  clientId
}: {
  clientId: string
}): Promise<Client | null> {
  const client = await prisma.client.findUnique({
    where: {
      id: clientId
    },
    select: {
      name: true,
      email: true
    }
  })
  return client
}

async function getItemsById({
  invoiceId
}: {
  invoiceId: string
}): Promise<InvoiceItem[] | []> {
  const items = await prisma.invoiceItem.findMany({
    where: {
      invoiceId
    },
    select: {
      name: true,
      quantity: true,
      price: true,
      total: true
    }
  })
  return items
}

async function getAddressClientById({
  clientId
}: {
  clientId: string
}): Promise<Address | null> {
  const address = await prisma.address.findUnique({
    where: {
      clientId
    },
    select: {
      street: true,
      city: true,
      postCode: true,
      country: true
    }
  })
  return address
}

async function getAddressInvoiceById({
  invoiceId
}: {
  invoiceId: string
}): Promise<Address | null> {
  const address = await prisma.address.findUnique({
    where: {
      invoiceId
    },
    select: {
      street: true,
      city: true,
      postCode: true,
      country: true
    }
  })
  return address
}

async function getAllInvoicesController(): Promise<Invoice[]> {
  try {
    const invoices = await prisma.invoice.findMany({
      select: {
        id: true,
        paymentDue: true,
        status: true,
        total: true,
        clientId: true,
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

async function getDetailInvoiceController({
  id
}: {
  id: string
}): Promise<Invoice> {
  try {
    const invoice = await getInvoiceById({ invoiceId: id })
    if (invoice === null) {
      throw new AppError({ message: 'Invoice not found', status: 404 })
    }
    const { clientId } = invoice

    const client = await getClientById({ clientId })
    if (client === null) {
      throw new AppError({ message: 'Client not found', status: 404 })
    }

    const itemsInvoice = await getItemsById({ invoiceId: id })
    if (itemsInvoice === null) {
      throw new AppError({ message: 'Items not found', status: 404 })
    }

    const clientAddress = await getAddressClientById({ clientId })
    if (clientAddress === null) {
      throw new AppError({ message: 'Client address not found', status: 404 })
    }

    const invoiceAddress = await getAddressInvoiceById({ invoiceId: id })
    if (invoiceAddress === null) {
      throw new AppError({ message: 'Invoice address not found', status: 404 })
    }
    return {
      ...invoice,
      client,
      items: itemsInvoice,
      clientAddress,
      invoiceAddress
    }
  } catch (error: unknown) {
    if (error instanceof AppError) {
      throw error
    }
    throw new AppError({ message: String(error), status: 500 })
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function deleteInvoiceByIdController({
  invoiceId
}: {
  invoiceId: string
}): Promise<Invoice | null> {
  try {
    const invoiceDelete = await prisma.invoice.findUnique({
      where: {
        id: invoiceId
      }
    })
    return invoiceDelete
  } catch (error) {
    throw new AppError({ message: 'invoice not found', status: 404 })
  }
}

export {
  getAllInvoicesController,
  getDetailInvoiceController,
  getInvoiceById,
  getClientById,
  getItemsById,
  getAddressClientById,
  getAddressInvoiceById,
  deleteInvoiceByIdController
}
