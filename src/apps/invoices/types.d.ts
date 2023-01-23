export interface Invoice {
  id: string
  paymentDue: Date
  status: string
  total: number
  client: {
    name: string
  }
}
