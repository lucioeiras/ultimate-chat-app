import { Router } from 'express'

import MessageController from '../controllers/message.js'

const MessageRouter = new Router()
const messageController = new MessageController()

MessageRouter.get('/message', async (_, res) => {
  const messages = await messageController.list()
  res.json(messages)
})

MessageRouter.get('/message/:user', async (req, res) => {
  const { user } = req.params
  const messages = await messageController.index(user)
  res.json(messages)
})

MessageRouter.post('/message', async (req, res) => {
  const { user, content } = req.body
  const newMessage = await messageController.create(user, content)
  res.json(newMessage)
})

export default MessageRouter
