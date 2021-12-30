<template>
  <main>
    <div class="main" v-for="data in json" :key="data">
      <message :json="data" />
    </div>
  </main>
</template>

<style>
body {
  color: #eee;
  background-color: #2a2a2a;
  font-family: Arial, Helvetica, sans-serif;
}

a {
  color: #0099ff;
}

a:hover {
  color: #037cce;
}

.logo {
  display: inline-block;
  font-weight: bold;
  font-size: 2em;
  margin: 0;
}

.title {
  border-bottom: 1px solid #4a4a4a;
  padding-bottom: 0.25em;
}

.main {
  border: none !important;
  outline: none !important;
}
</style>

<script>
import Message from "./components/Message.vue";
import * as allJson from "./json/data.json";

export default {
  data() {
    return {
      json: allJson.data,
    };
  },
  components: { Message },
  name: "App",
};
</script>
