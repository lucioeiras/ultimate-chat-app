import { io } from 'socket.io-client'

import { user } from '../contexts/user'
import { messages } from '../contexts/messages'

const ENVIROMENT = import.meta.env.VITE_NODE_ENV
const LOCAL_URL = import.meta.env.VITE_LOCAL_SERVER_URL
const PROD_URL = import.meta.env.VITE_PROD_SERVER_URL

class SocketIO {
  socket

  connect() {
    this.socket = io(ENVIROMENT === 'development' ? LOCAL_URL : PROD_URL)

    this.socket.on('new message', message => {
      messages.add({
        user: message.user,
        content: message.content,
        type: message.user === user.name ? 'sended' : 'received'
      })
    })
  }

  disconnect() {
    this.socket && this.socket.disconnect()
  }

  sendMessage(content) {
    this.socket.emit('send message', { user: user.name, content })
  }
}

export default new SocketIO()
