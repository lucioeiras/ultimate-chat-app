<template>
  <form id="messageInput" @submit.prevent="onSubmit">
    <input v-model="content" placeholder="Escreva sua mensagem aqui" />
    <button type="submit" :disabled="content === ''">Enviar</button>
  </form>
</template>

<script>
  import { messages } from '../contexts/messages'

  export default {
    data() {
      return {
        content: ''
      }
    },
    methods: {
      onSubmit() {
        messages.send(this.content)
        this.content = ''
      }
    }
  }
</script>

<style scoped>
  #messageInput {
    position: absolute;
    bottom: 0;

    width: 100%;
    height: 72px;

    display: flex;

    border-top: 1px solid #E2E8F0;
  }

  #messageInput input {
    width: 100%;
    height: 100%;

    border: 0;
    background: #F7FAFC;

    color: #4A5568;
    font-size: 16px;
    padding: 0 24px;
  }

  #messageInput input::placeholder {
    color: #CBD5E0;
  }

  #messageInput button {
    cursor: pointer;

    width: 160px;

    border: 0;
    background: #805AD5;

    color: #fff;
    font-size: 16px;
    font-weight: 600;

    transition: background-color 0.3s;
  }

  #messageInput button:hover {
    background: #553C9A;
  }
</style>
