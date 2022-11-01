import './config/mongoose.js'
import 'dotenv/config'

import express from 'express'
import cors from 'cors'
import { Server } from 'socket.io'

import routes from './routes.js'
import MessageController from './controllers/message.js'

const LOCAL_CLIENT_URL = process.env.LOCAL_CLIENT_URL
const PROD_CLIENT_URL = process.env.PROD_CLIENT_URL

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

const PORT = process.env.PORT || 3333

const server = app.listen(PORT,
  () => console.log(`🚀 Server started at ${PORT}`))

const io = new Server(server, {
  cors: {
    origin: [LOCAL_CLIENT_URL, PROD_CLIENT_URL],
    methods: ["GET", "POST"]
  }
})

io.on('connection', socket => {
  console.log('👍 User connected')

  socket.on('send message', async message => {
    const messageController = new MessageController()

    const newMessage = await messageController.create(
      message.user,
      message.content
    )

    socket.broadcast.emit('new message', newMessage)
  })

  socket.on('disconnect', () => console.log('🥺 User disconnected'))
})
