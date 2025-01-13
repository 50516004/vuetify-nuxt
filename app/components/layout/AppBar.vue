<script lang="ts" setup>

const theme = defineModel<string>("theme");
const drawer = defineModel<boolean | null>("drawer");

const themeIcon = computed(
  () => theme.value === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
)

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <v-app-bar color="primary">
    <template #prepend>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" />
    </template>
    <v-app-bar-title>
      <NuxtLink to="/">
        <v-btn color="white">Vuetify3 + Nuxt4 プロジェクト</v-btn>
      </NuxtLink>
    </v-app-bar-title>
    <v-spacer />
    <v-btn :icon="themeIcon" slim @click="toggleTheme" />
  </v-app-bar>
</template>