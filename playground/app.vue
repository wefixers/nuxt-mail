<script setup lang="ts">
async function send() {
  await $fetch('/api/send-email')
}
</script>

<template>
  <div>
    Nuxt module playground!

    <button @click="send">
      Send
    </button>
  </div>
</template>
