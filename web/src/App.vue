<template>
  <main>
    <router-view />
  </main>
</template>

<script>
  import SocketIO from './config/socket'

  export default {
    created() {
      SocketIO.connect()
    },
    beforeUnmount() {
      SocketIO.disconnect()
    }
  }
</script>

<style scoped>
  main {
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #F7FAFC;
  }
</style>
