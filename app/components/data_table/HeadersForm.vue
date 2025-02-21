<script lang="ts" setup>
  import { default_headers } from "~/contents/table_data";

  const drawer = ref(false);
  const selected = ref(default_headers);
</script>

<template>
  <v-navigation-drawer
    v-model="drawer"
    location="right"
    width="400"
    temporary
    scrim="transparent"
  >
    <v-toolbar color="primary">
      <template #title>表示列</template>
    </v-toolbar>
    <v-container>
      <v-switch
        v-model="selected"
        value="header.key"
        color="success"
        hide-details
        inset
      ></v-switch>
      <v-btn text="デフォルト" color="info" class="mt-4"></v-btn>
    </v-container>
  </v-navigation-drawer>
</template>
