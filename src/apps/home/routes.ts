import express from 'express'
const router = express.Router()

router.get('/', (_, res) => {
  console.log('Hello world!!!')
  res.send('Response from API')
})

export { router }
