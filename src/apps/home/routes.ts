import express from 'express'
const router = express.Router()

router.get('/', (_, res) => {
  console.log('Hello world!!!')
  res.send('Response from API')
})

router.get('/health', (_, res) => {
  res.status(200).send('OK')
})

export { router }
