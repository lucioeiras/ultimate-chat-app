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
    height: 100%;
    padding: 30px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
