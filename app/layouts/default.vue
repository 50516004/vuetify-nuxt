<script lang="ts" setup>
  import { ref } from "vue";
  import AppBar from "~/components/layout/AppBar.vue";
  import NavBar from "~/components/layout/NavBar.vue";

  useHead({ titleTemplate: "%s Vuetify3 + Nuxt4 " });

  const drawer = ref(null);
  const theme = ref("light");
</script>
<template>
  <v-app :theme="theme">
    <!-- アプリケーションバー -->
    <AppBar v-model:drawer="drawer" v-model:theme="theme" />

    <!-- ナビゲーションバー -->
    <NavBar v-model:drawer="drawer" />

    <!-- メインコンテンツ -->
    <v-main>
      <slot>No content</slot>
    </v-main>
  </v-app>
</template>
