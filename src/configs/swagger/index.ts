import swaggerJSDoc, { OAS3Definition, OAS3Options } from 'swagger-jsdoc'
import { ConfigEnv } from '@configs/index'

const swaggerDefinition: OAS3Definition = {
  openapi: '3.0.0',
  info: {
    title: 'Invoice API',
    version: ConfigEnv.PKG_VERSION,
    description:
      'Con esta API, los desarrolladores pueden crear, validar, firmar, enviar facturas a clientes y obtener estados de pago.'
  }
}

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  failOnErrors: true,
  apis: ['src/apps/**/routes*.ts']
}

export const OpenAPISpec = swaggerJSDoc(swaggerOptions)
