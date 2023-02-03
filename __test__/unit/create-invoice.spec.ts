import { createInvoiceController } from '@apps/invoices/controller'
import type { CreateInvoiceDTO } from '@apps/invoices/types'

describe('createInvoice', () => {
  it('should return invoice created', async () => {
    const payload: CreateInvoiceDTO = {
      paymentDue: new Date(
        'Thu Mar 23 2023 18:28:13 GMT-0300 (Chile Summer Time)'
      ),
      description: 'Reprehenderit tempora dolor enim ut ipsum eius.',
      status: 'pending',
      paymentTerms: 30,
      total: 252.0,
      clientId: '63d8f318747bd0e01ce76699', // TODO: Automatizar creacion de cliente para no reemplazar manualmente el id
      items: [],
      invoiceAddress: {
        street: 'Adam Fall',
        city: 'Marjorieport',
        postCode: '76839',
        country: 'Avon'
      }
    }

    const invoice = await createInvoiceController(payload)
    expect(invoice).toEqual({
      id: expect.any(String),
      createdAt: expect.any(Date),
      paymentDue: payload.paymentDue,
      description: payload.description,
      status: payload.status,
      paymentTerms: payload.paymentTerms,
      total: payload.total,
      clientId: payload.clientId
    })
  })
})
