<template>
  <div id="chat">
    <MessageList />
    <MessageInput />
  </div>
</template>

<script setup>
  import MessageList from '../components/MessageList.vue';
  import MessageInput from '../components/MessageInput.vue';
</script>

<style scoped>
  #chat {
    width: 100vw;
    height: fill-available;
    height: -webkit-fill-available;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background: #fff;
  }
</style>
