import { reactive } from 'vue'

export const user = reactive({ 
  name: window.localStorage.getItem('userName') || '',
  change(newName) {
    this.name = newName
    window.localStorage.setItem('userName', newName)
  }
})