<template>
  <div>
    <h1 v-if="!messages">Loading...</h1>

    <div v-if="messages">
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
    fetchData() {
      const route = useRoute();
      this.messages = null;
      this.loading = true;

      let $this = this;
      fetchJson(route.query.url, function printResult(result) {
        console.log(result);
        $this.messages = JSON.parse(JSON.parse(result).contents);
      });
    },
  },
};
function fetchJson(url, printResult) {
  let x = new XMLHttpRequest();
  x.open("GET", "https://api.allorigins.win/get?url=" + url);
  x.onload = x.onerror = function () {
    printResult(x.responseText || "");
  };
  x.setRequestHeader("Content-Type", "application/json");
  x.send();
}
</script>
