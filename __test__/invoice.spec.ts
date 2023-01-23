import request from 'supertest'

import { appServer, routePrefix } from '@src/server'

describe(`GET ${routePrefix}/invoices`, () => {
  it('should return 200', async () => {
    const oneInvoiceExpected = [
      {
        id: '63cc5f7c146c5606c193f803',
        paymentDue: '2021-08-19T00:00:00.000Z',
        status: 'paid',
        total: 1800.9,
        client: { name: 'Jensen Huang' }
      }
    ]
    const response = await request(appServer).get(`${routePrefix}/invoices`)
    expect(response.statusCode).toBe(200)
    expect(response.body.data).toEqual(
      expect.arrayContaining(oneInvoiceExpected)
    )
  })
})
