<script lang="ts" setup>
  useHead({ title: "データテーブル" });

  const headers = [
    {},
    { title: "No", key: "id", sortable: false },
    { title: "日時", key: "date" },
    { title: "タイトル", key: "title" },
  ];

  const messages = ref([
    {
      id: 1,
      title: "こんにちは",
      date: "2024/02/26 13:45",
      isRead: false,
    },
    {
      id: 2,
      title: "よろしくお願いします",
      date: "2024/02/26 14:45",
      isRead: false,
    },
    {
      id: 3,
      title: "お疲れ様です",
      date: "2024/02/27 13:45",
      isRead: false,
    },
    {
      id: 4,
      title: "ありがとうございました",
      date: "2024/02/27 15:45",
      isRead: false,
    },
  ]);

  function reset() {
    messages.value.forEach((message) => (message.isRead = false));
  }

  type Row = {
    index: number;
  };

  function handleClick(e: any, row: Row) {
    const msg = messages.value[row.index];
    if (msg) msg.isRead = !msg.isRead;
  }

  const selected = ref([]);
</script>

<template>
  <v-container>
    <v-card elevation="5">
      <v-card-title>
        <v-container>
          <v-row>
            <h1 class="text-h5 font-weight-black">メッセージボックス</h1>
            <v-spacer></v-spacer>
            <v-btn @click="reset" color="primary">リセット</v-btn>
          </v-row>
        </v-container>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="messages"
        @click:row="handleClick"
        item-value="id"
        item-selectable="selectable"
        show-select
        v-model="selected"
        hover
      >
        <template #item.title="{ item }">
          <td :class="!item.isRead && 'font-weight-bold'">
            {{ item.title }}
            <v-badge v-if="!item.isRead" color="success" dot inline></v-badge>
          </td>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>
