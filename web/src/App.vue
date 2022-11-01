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
    height: fill-available;
    height: -webkit-fill-available;
  }
</style>
