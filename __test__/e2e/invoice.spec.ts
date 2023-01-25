import request from 'supertest'

import { appServer, routePrefix } from '@src/server'

describe(`GET ${routePrefix}/invoices`, () => {
  it('should return 200 and all invoices on list', async () => {
    const oneInvoiceExpected = [
      {
        id: '63cc5f7c146c5606c193f803',
        paymentDue: '2021-08-19T00:00:00.000Z',
        status: 'paid',
        total: 1800.9,
        clientId: '63cc5f7c146c5606c193f801',
        client: { name: 'Jensen Huang' }
      }
    ]
    const response = await request(appServer).get(`${routePrefix}/invoices`)
    expect(response.statusCode).toBe(200)
    expect(response.body.data).toEqual(
      expect.arrayContaining(oneInvoiceExpected)
    )
  })
  it('should return 200 and one invoice with detail', async () => {
    const invoiceExpected = {
      id: '63cc5f7d146c5606c193f808',
      createdAt: new Date('2023-01-21T21:56:11.087+00:00').toJSON(),
      paymentDue: new Date('2021-09-20T00:00:00.000+00:00').toJSON(),
      status: 'pending',
      description: 'Graphic Design',
      total: 556,
      paymentTerms: 30,
      clientId: '63cc5f7d146c5606c193f806',
      client: {
        name: 'Alex Grim',
        email: 'alexgrim@mail.com'
      },
      items: [
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
      ],
      clientAddress: {
        street: '84 Church Way',
        city: 'Bradford',
        postCode: 'BD1 9PB',
        country: 'United Kingdom'
      },
      invoiceAddress: {
        street: '19 Union Terrace',
        city: 'London',
        postCode: 'E1 3EZ',
        country: 'United Kingdom'
      }
    }
    const response = await request(appServer).get(
      `${routePrefix}/invoices/63cc5f7d146c5606c193f808`
    )
    expect(response.statusCode).toBe(200)
    expect(response.body.data).toEqual(invoiceExpected)
  })
})
