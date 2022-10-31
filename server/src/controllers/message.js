import MessageModel from '../models/message.js'

export default class MessageController {
  async list() {
    const messages = await MessageModel.find()
    return messages
  }

  async index(user) {
    const messages = await MessageModel.find({ user })
    return messages
  }

  async create(user, content) {
    const newMessage = await MessageModel.create({ user, content })
    return newMessage
  }
}
