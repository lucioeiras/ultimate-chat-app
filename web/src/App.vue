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
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
