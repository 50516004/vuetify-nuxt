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
      <v-row cols="12">
        <v-autocomplete></v-autocomplete>
      </v-row>
    </v-container>
  </v-navigation-drawer>
</template>
