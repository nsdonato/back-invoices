import 'module-alias/register'
import morgan from 'morgan'
import express from 'express'
import cors from 'cors'
import { router } from '@apps/home/routes'
import { ConfigEnv } from '@configs/index'

morgan('server')

const app = express()
const routePrefix = '/api/v1'
const port = ConfigEnv.PORT

// Middlewares]
app.use(express.json())
app.use(cors())
app.use(
  express.urlencoded({
    extended: true
  })
)

// Routes

app.use(`${routePrefix}/`, router)

export const start = (): void => {
  app.listen(port, () => morgan(`Server running on port ${port}`))
}
