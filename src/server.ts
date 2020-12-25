import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import 'reflect-metadata'
import bodyParser from 'body-parser'
import mongoInstance from './database'
import RoutesRoot from './routes'

const app = express()
const mongodb = process.env.MONGO_SERVER || ''
const PORT: string | number = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', RoutesRoot.initRoutes())

app.use(cors())
mongoInstance(mongodb)

app.use('*', (req, res) => {
  res.status(404)
  res.json({ message: 'Not found' })
})

app.listen(PORT, () => {
  console.log(`Lisnten at port ${PORT} , have fun!`)
})
