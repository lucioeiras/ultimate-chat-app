import { createRouter, createWebHistory } from 'vue-router'
import Chat from './pages/Chat.vue'
import UserForm from './pages/UserForm.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: UserForm,
    },
    {
      path: '/chat',
      component: Chat,
    }
  ]
})