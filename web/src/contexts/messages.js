import { reactive } from 'vue'

import SocketIO from '../config/socket'

import { api } from '../config/axios'
import { user } from './user'

export const messages = reactive({ 
  values: [],
  get() {
    api.get('/message').then(response => {
      const newMessages = response.data.map(message => { 
        return {
          user: message.user, 
          content: message.content, 
          type: message.user === user.name ? 'sended' : 'received' 
        }
      })

      this.values = newMessages
    })
  },
  add(message) {
    this.values.push(message)
  },
  send(content) {
    this.values.push({
      user: user.name, 
      content: content, 
      type: 'sended' 
    })

    SocketIO.sendMessage(content)
  }
})