<template>
  <div id="message" :class="type">
    <span>{{ user }}</span>
    <p>{{ content }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      user: String,
      content: String,
      type: 'received' | 'sended'
    }
  }
</script>

<style scoped>
  #message {
    width: max-content;
    max-width: 50%;

    border-radius: 12px;
    padding: 16px 16px;
  }

  #message p {
    font-size: 16px;
    font-weight: 400;
    margin-top: 8px;
  }

  #message span {
    font-size: 14px;
    font-weight: 500;
  }

  .received {
    background: #EDF2F7;
    color: #4A5568;
  }

  .received span {
    color: #9F7AEA;
  }

  .sended {
    background: #805AD51F;
    color: #805AD5;
    margin-left: auto;
  }

  .sended p {
    font-weight: 500;
    margin-top: 0 !important;
  }

  .sended span {
    display: none;
  }
</style>
