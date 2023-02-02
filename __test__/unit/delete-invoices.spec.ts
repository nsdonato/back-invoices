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
})
