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
    width: 1040px;
    height: 640px;

    background: #fff;
    
    border: 1px solid #E2E8F0;
    border-radius: 16px;
  }
</style>
