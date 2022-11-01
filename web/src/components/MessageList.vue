<template>
  <div id="messageList">
    <ul ref="list">
      <li :key="message" v-for="message in messages.values">
        <Message v-bind="message" />
      </li>
    </ul>
  </div>
</template>

<script>
  import Message from './Message.vue'

  import { messages } from '../contexts/messages'

  export default {
    components: {
      Message
    },
    data() {
      return {
        messages
      }
    },
    created() {
      messages.get()
    },
    updated() {
      this.$refs.list.scrollTop = this.$refs.list.scrollHeight
    }
  }
</script>

<style scoped>
  #messageList {
    overflow: hidden;
    width: 100vw;
  }

  #messageList ul {
    overflow: auto;
    height: 100%;

    border-radius: 0px 16px 16px 0;

    margin: 0;
    padding: 32px;
  }

  #messageList ul li {
    list-style: none;
  }

  #messageList ul li:not(:first-child) {
    margin-top: 20px;
  }
</style>
