import { io } from 'socket.io-client'

import { user } from '../contexts/user'
import { messages } from '../contexts/messages'

class SocketIO {
  socket

  connect() {
    this.socket = io('http://localhost:3333')

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