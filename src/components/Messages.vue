<template>
  <div>
    <div v-if="loading">Loading...</div>

    <div v-if="messages">
      <h1>url: {{ url }}</h1>
      <discord-messages>
        <message
          class="main"
          v-for="message in messages"
          :key="message"
          :message="message"
        />
      </discord-messages>
    </div>
  </div>
</template>
<style>
body {
  background-color: #2a2a2a;
  font-family: Arial, Helvetica, sans-serif;
}
</style>

<script>
import Message from "./Message.vue";

import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "Messages",
  data() {
    return {
      messages: null,
    };
  },
  components: { Message },
  setup() {
    const route = useRoute();

    const url = computed(() => route.query.url);

    return {
      url,
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData",
  },
  methods: {
    async fetchData() {
      const route = useRoute();
      this.messages = null;
      this.loading = true;

      this.messages = await fetch(route.query.url).then((res) => {
        console.log(res);
        return res.json();
      });
    },
  },
};
</script>
