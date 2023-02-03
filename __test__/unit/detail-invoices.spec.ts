import {
  getClientById,
  getInvoiceById,
  getItemsById,
  getAddressClientById,
  getAddressInvoiceById
} from '@apps/invoices/controller'

describe('getInvoiceWithId', () => {
  it('should return null if invoice not found', async () => {
    const invoice = await getInvoiceById({
      invoiceId: '3224411551332df2e4a23cc1'
    })
    expect(invoice).toBeNull()
  })
  it('should return invoice if invoice found', async () => {
    const invoiceExpected = {
      id: '63cc5f7d146c5606c193f808',
      createdAt: new Date('2023-01-21T21:56:11.087+00:00'),
      paymentDue: new Date('2021-09-20T00:00:00.000+00:00'),
      status: 'pending',
      description: 'Graphic Design',
      total: 556,
      paymentTerms: 30,
      clientId: '63cc5f7d146c5606c193f806'
    }
    const invoice = await getInvoiceById({
      invoiceId: '63cc5f7d146c5606c193f808'
    })
    expect(invoice).toEqual(invoiceExpected)
  })
})

describe('getClientById', () => {
  it('should return null if client not found', async () => {
    const client = await getClientById({ clientId: '1324252ae2531523ffaa6753' })
    expect(client).toBeNull()
  })
  it('should return client if client found', async () => {
    const clientExpected = {
      name: 'Alex Grim',
      email: 'alexgrim@mail.com'
    }
    const client = await getClientById({ clientId: '63cc5f7d146c5606c193f806' })
    expect(client).toEqual(clientExpected)
  })
})

describe('getItemsById', () => {
  it('should return array empty if items not found', async () => {
    const items = await getItemsById({ invoiceId: '1324252ae2531523ffaa6753' })
    expect(items.length).toBe(0)
  })
  it('should return items if items found', async () => {
    const itemsExpected = [
      {
        name: 'Banner Design',
        quantity: 1,
        price: 156,
        total: 156
      },
      {
        name: 'Email Design',
        quantity: 2,
        price: 200,
        total: 400
      }
    ]
    const items = await getItemsById({ invoiceId: '63cc5f7d146c5606c193f808' })
    expect(items).toEqual(itemsExpected)
  })
})

describe('getAddressClientById', () => {
  it('should return null if address client not found', async () => {
    const address = await getAddressClientById({
      clientId: '1324252ae2531523ffaa6753'
    })
    expect(address).toBeNull()
  })
  it('should return address client if address client found', async () => {
    const addressExpected = {
      street: '84 Church Way',
      city: 'Bradford',
      postCode: 'BD1 9PB',
      country: 'United Kingdom'
    }
    const address = await getAddressClientById({
      clientId: '63cc5f7d146c5606c193f806'
    })
    expect(address).toEqual(addressExpected)
  })
})

describe('getAddressInvoiceById', () => {
  it('should return null if address invoice not found', async () => {
    const address = await getAddressInvoiceById({
      invoiceId: '1324252ae2531523ffaa6753'
    })
    expect(address).toBeNull()
  })
  it('should return address invoice if address invoice found', async () => {
    const addressExpected = {
      street: '19 Union Terrace',
      city: 'London',
      postCode: 'E1 3EZ',
      country: 'United Kingdom'
    }
    const address = await getAddressInvoiceById({
      invoiceId: '63cc5f7d146c5606c193f808'
    })
    expect(address).toEqual(addressExpected)
  })
})
