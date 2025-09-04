<script setup lang="ts">
  import { ref } from "vue";

  defineProps<{
    text: string; // コピーするテキスト
  }>();

  const copied = ref(false);

  async function copyToClipboard(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      copied.value = true;
      setTimeout(() => (copied.value = false), 2000);
    } catch (err) {
      console.error("コピーに失敗しました", err);
    }
  }
</script>

<template>
  <v-tooltip :open-on-hover="false" v-model="copied" text="コピーしました！">
    <template #activator="{ props }">
      <v-btn v-bind="props" size="40" @click="copyToClipboard(text)">
        <v-icon>mdi-content-copy</v-icon>
      </v-btn>
    </template>
  </v-tooltip>
</template>
