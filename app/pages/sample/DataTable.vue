<script lang="ts" setup>
  import { headers, items, type Item } from "~/contents/table_data";

  useHead({ title: "データテーブル" });

  function openDetail(item: Item) {
    alert(`${item.name}は\$${item.price}です。`);
  }

  function handleClick(e: any, item: any) {
    alert(JSON.stringify(item));
  }
</script>

<template>
  <v-container>
    <v-card elevation="5">
      <v-card-title>
        <v-row class="align-center">
          <v-col>
            <v-icon icon="mdi-video-input-component"></v-icon>
            <span>&nbsp; Find a Graphics Card</span>
          </v-col>
          <v-col cols="auto">
            <v-btn color="primary">ボタン</v-btn>
          </v-col>
        </v-row>
      </v-card-title>
      <v-data-table :items="items" :headers="headers" @click:row="handleClick">
        <template v-slot:item.image="{ item }">
          <v-card class="my-2" elevation="2" rounded>
            <v-img
              :src="`https://cdn.vuetifyjs.com/docs/images/graphics/gpus/${item.image}`"
              width="64"
              cover
            ></v-img>
          </v-card>
        </template>

        <template v-slot:item.rating="{ item }">
          <v-rating
            :model-value="item.rating"
            color="orange-darken-2"
            density="compact"
            size="small"
            readonly
            @click=""
          ></v-rating>
        </template>

        <template v-slot:item.stock="{ item }">
          <v-chip
            :color="item.stock ? 'green' : 'red'"
            :text="item.stock ? 'In stock' : 'Out of stock'"
            class="text-uppercase"
            size="small"
            label
          ></v-chip>
        </template>

        <template v-slot:item.actions="{ item }">
          <v-btn
            color="secondary"
            text="詳細"
            @click="openDetail(item)"
          ></v-btn>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>
