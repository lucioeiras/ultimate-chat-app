import './config/mongoose.js'

import express from 'express'
import cors from 'cors'
import { Server } from 'socket.io'

import routes from './routes.js'
import MessageController from './controllers/message.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

const server = app.listen(3333,
  () => console.log('🚀 Server started at localhost:3333'))

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ["GET", "POST"]
  }
})

export default io

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

  socket.on('disconnect', () => console.log('😭 User disconnected'))
})
