<script lang="ts" setup>
  import CopyButton from "~/components/button/CopyButton.vue";

  useHead({ title: "カード" });
</script>

<template>
  <v-card title="カードタイトル" text="カードテキスト"></v-card>
  <v-container>
    <v-card title="カードタイトル" text="カードテキスト"></v-card>
  </v-container>
  <v-card>
    <v-card-text>
      あいうえお&nbsp;
      <CopyButton text="あいうえお"></CopyButton>
    </v-card-text>
  </v-card>
</template>
