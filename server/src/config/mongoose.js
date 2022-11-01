import mongoose from 'mongoose'

const ENVIROMENT = process.env.NODE_ENV
const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(
  ENVIROMENT === 'development'
    ? 'mongodb://localhost:27017/chat'
    : MONGODB_URI
)
