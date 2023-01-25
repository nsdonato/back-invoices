export interface Invoice {
  id: string
  createdAt?: Date
  paymentDue: Date
  description?: string
  status: string
  paymentTerms?: number
  total: number
  clientId: string
  client?: Client
  items?: InvoiceItem[]
  clientAddress?: Address
  invoiceAddress?: Address
}

export interface Client {
  id?: string
  createdAt?: Date
  name: string
  email?: string
}

export interface InvoiceItem {
  id?: string
  name: string
  quantity: number
  price: number
  total: number
}

export interface Address {
  id?: string
  street: string
  city: string
  postCode: string
  country: string
}
