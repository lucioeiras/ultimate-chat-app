<template>
  <form id="userForm">
    <h1>😃 <br> Bem-vindo! <br> Digite seu nome abaixo</h1>
    <input 
      placeholder="Digite seu nome"
      v-model="newUser"
    />
    <button type="submit" @click="submitForm">Entrar</button>
  </form>
</template>

<script>
  import { user } from '../contexts/user'

  export default {
    data() {
      return {
        newUser: ''
      }
    },
    methods: {
      submitForm(e) {
        e.preventDefault()
        user.change(this.newUser)
        this.$router.push('chat')
      }
    }
  }
</script>

<style>
  #userForm {
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: #FFF;
  }

  #userForm h1 {
    color: #2A3E60;
    text-align: center;

    margin-bottom: 32px;
  }

  #userForm input {
    height: 64px;
    width: 320px;

    border: 0;
    border: 1px solid #E2E8F0;
    border-radius: 8px;

    background: #F7FAFC;

    color: #4A5568;
    font-size: 16px;

    padding: 0 24px;
  }

  #userForm input::placeholder {
    color: #CBD5E0;
  }

  #userForm button {
    cursor: pointer;

    width: 320px;
    height: 56px;

    border: 0;
    border-radius: 8px;

    background: #805AD5;

    color: #fff;
    font-size: 16px;
    font-weight: 600;

    margin-top: 24px;

    transition: background-color 0.3s;
  }

  #userForm button:hover {
    background: #553C9A;
  }
</style>