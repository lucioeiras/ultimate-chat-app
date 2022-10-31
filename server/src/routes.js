import { Router } from 'express'

import MessageRouter from './routes/message.js'

const routes = Router()

routes.use(MessageRouter)

export default routes
