import { AppError } from '@models/app-error'
import { deleteInvoiceByIdController } from '@apps/invoices/controller'

describe('deleteInvoicesController', () => {
  it('should return throw error if invoice not exist', async () => {
    try {
      await deleteInvoiceByIdController({
        invoiceId: '23492'
      })
    } catch (error) {
      expect(error).toBeInstanceOf(AppError)
    }
  })
  it('should return a invoices if invoice found', async () => {
    const invoice = await deleteInvoiceByIdController({
      invoiceId: '63d02c4da936f4c261194558'
    })

    const invoicesExpected = {
      id: '63d02c4da936f4c261194558',
      createdAt: new Date('2023-01-24T19:06:52.833Z'),
      paymentDue: new Date('2021-08-19T00:00:00.000Z'),
      description: 'Re-branding',
      status: 'paid',
      paymentTerms: 1,
      total: 1800.9,
      clientId: '63d02c4da936f4c261194556'
    }
    expect(invoice).toEqual(invoicesExpected)
  })
})
