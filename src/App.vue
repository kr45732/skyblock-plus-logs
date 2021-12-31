<template>
  <main>
    <discord-messages>
      <message
        class="main"
        v-for="message in messages"
        :key="message"
        :message="message"
      />
    </discord-messages>
  </main>
</template>

<style>
body {
  /* color: #eee; */
  background-color: #2a2a2a;
  font-family: Arial, Helvetica, sans-serif;
}
</style>

<script>
import Message from "./components/Message.vue";
import * as messages from "./json/data.json";

export default {
  data() {
    return {
      messages: messages.data,
    };
  },
  components: { Message },
  name: "App",
};
</script>
