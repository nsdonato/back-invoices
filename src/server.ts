import 'module-alias/register'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import compress from 'compression'
import handlerError from '@middlewares/error-handler'
import { router } from '@apps/home/routes'
import { invoicesRouter } from '@apps/invoices/router'
import { ConfigEnv, logger } from '@configs/index'

const app = express()
const routePrefix = '/api/v1'
const port = ConfigEnv.PORT

app.use(express.json())
app.use(cors())
app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(helmet.xssFilter())
app.use(helmet.noSniff())
app.use(helmet.hidePoweredBy())
app.use(helmet.frameguard({ action: 'deny' }))
app.use(compress())
app.use(logger.express)

app.use(`${routePrefix}/`, router)
app.use(`${routePrefix}/invoices`, invoicesRouter)

app.use(handlerError)

export const start = (): void => {
  app.listen(port, () => {
    logger.debug.info(`Server running on port ${port}`)
  })
}

export { app as appServer, routePrefix }
