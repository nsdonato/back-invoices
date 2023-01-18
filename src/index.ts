import express from 'express'
import cors from 'cors'
import { router } from '@routes/routes'
import { getEnvVar } from '@common/utils'

const app = express()
app.use(express.json())
app.use(cors())
const port = getEnvVar('PORT') || 3000

app.listen(port, () => console.log(`Server running at port: ${port}`))
app.use('/api', router)
