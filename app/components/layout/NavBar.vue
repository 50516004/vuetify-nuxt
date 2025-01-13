<script lang="ts" setup>
  const drawer = defineModel<boolean | null>("drawer");

  const categories = [
    {
      title: "サンプル",
      icon: "",
      items: [
        {
          title: "カード",
          icon: "mdi-card-text-outline",
          to: "/sample/card",
        },
        {
          title: "データテーブル",
          icon: "mdi-card-text-outline",
          to: "/sample/datatable",
        },
      ],
    },
  ];
</script>

<template>
  <v-navigation-drawer v-model="drawer">
    <v-list
      density="compact"
      nav
    >
      <v-list-group
        v-for="category in categories"
        :key="category.title"
        fluid
      >
        <template #activator="{ props }">
          <v-list-item
            v-bind="props"
            :prepend-icon="category.icon"
          >
            {{ category.title }}
          </v-list-item>
        </template>
        <v-list-item
          v-for="item in category.items"
          :key="item.title"
          :prepend-icon="item.icon"
          :to="item.to"
          nuxt
        >
          {{ item.title }}
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>
