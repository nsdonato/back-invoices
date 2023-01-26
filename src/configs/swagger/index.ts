import swaggerJSDoc, { OAS3Definition, OAS3Options } from 'swagger-jsdoc'

const swaggerDefinition: OAS3Definition = {
  openapi: '3.0.0',
  info: {
    title: 'Invoice API',
    version: process.env.npm_package_version || '1.0.0',
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
