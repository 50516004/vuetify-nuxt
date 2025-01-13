<script lang="ts" setup>
import { graphics_cards } from '~/contents/data';

useHead({ title: "データテーブル" });

const search = ref("");
</script>

<template>
  <v-container>
    <v-card>
      <v-card-title>
        <v-row>
          <v-col>テーブル名</v-col>
          <v-col cols="auto"></v-col>
          <v-col cols="auto">
            <v-btn color="primary">ボタン</v-btn>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text>
        <v-data-table v-model:search="search" :filter-keys="['name']" :items="graphics_cards">

          <template v-slot:item.image="{ item }">
            <v-card class="my-2" elevation="2" rounded>
              <v-img :src="`https://cdn.vuetifyjs.com/docs/images/graphics/gpus/${item.image}`" height="64"
                cover></v-img>
            </v-card>
          </template>

          <template v-slot:item.rating="{ item }">
            <v-rating :model-value="item.rating" color="orange-darken-2" density="compact" size="small"
              readonly></v-rating>
          </template>

          <template v-slot:item.stock="{ item }">
            <v-chip :color="item.stock ? 'green' : 'red'" :text="item.stock ? 'In stock' : 'Out of stock'"
              class="text-uppercase" size="small" label></v-chip>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>