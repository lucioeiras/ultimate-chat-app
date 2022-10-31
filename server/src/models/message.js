import mongoose from 'mongoose'

const MessageSchema = new mongoose.Schema({
  user: String,
  content: String
})

export default mongoose.model('Message', MessageSchema)
