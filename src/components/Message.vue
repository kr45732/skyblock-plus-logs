<template>
  <discord-messages>
    <discord-message
      :author="json.user.name"
      :avatar="json.user.avatar"
      :roleColor="json.user.avatar"
      :bot="json.user.isBot"
      :verified="json.user.isVerified"
    >
      {{ json.text }}
      <div v-for="embed in json.embeds" :key="embed">
        <discord-embed
          slot="embeds"
          :color="embed.color"
          :embed-title="embed.title"
          :timestamp="json.timestamp"
          :url="embed.url"
        >
          {{ embed.description }}
          <discord-embed-fields
            slot="fields"
            v-for="field in embed.fields"
            :key="field"
          >
            <discord-embed-field :field-title="field.name" inline>
              {{ field.value }}
            </discord-embed-field>
          </discord-embed-fields>
          <span slot="footer">{{ embed.footer }}</span>
        </discord-embed>
      </div>
    </discord-message>
  </discord-messages>
</template>

<script>
export default {
  name: "Message",
  props: ["json"],
};
</script>

<style scoped>
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
</style>