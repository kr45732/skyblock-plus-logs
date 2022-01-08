<template>
  <discord-message
    :author="message.user.name"
    :avatar="message.user.avatar"
    :bot="message.user.isBot"
    :verified="message.user.isVerified"
    :timestamp="message.timestamp"
    :style="cssVars"
  >
    <span v-html="message.text"></span>
    <discord-embed
      slot="embeds"
      v-for="embed in message.embeds"
      :key="embed"
      :color="embed.color"
      :embed-title="embed.title"
      :url="embed.url"
      :thumbnail="embed.thumbnail"
    >
      <discord-embed-description
        slot="description"
        v-html="embed.description"
      />
      <discord-embed-fields>
        <discord-embed-field
          slot="fields"
          v-for="(field, index) in embed.fields"
          :key="field"
          :field-title="field.name"
          :inline="field.inline"
          :inline-index="(index % 3) + 1"
        >
          {{ field.value }}
        </discord-embed-field>
      </discord-embed-fields>
      <discord-embed-footer slot="footer" :timestamp="embed.timestamp">
        {{ embed.footer }}
      </discord-embed-footer>
    </discord-embed>
  </discord-message>
</template>

<script>
export default {
  name: "Message",
  props: ["message"],
  computed: {
    cssVars() {
      return {
        "--color": this.message.user.color,
      };
    },
  },
};
</script>

<style>
.discord-author-username {
  color: var(--color) !important;
}

.spoiler {
  color: transparent;
  background-color: black;
  transition: background-color 0.25s;
}

.spoiler:hover {
  color: white;
  background-color: transparent;
}

.code {
  color: white;
  background-color: #2f3136;
  padding: 2px;
}
</style>