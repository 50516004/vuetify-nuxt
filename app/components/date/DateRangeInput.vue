<script lang="ts" setup>
import DateTimeInput from './DateTimeInput.vue';

// ラベルプロパティ
const { label } = defineProps<{
  label? : string | undefined;
}>();

// fromとtoのv-model
const fromModel = defineModel<Date | null>("from");
const toModel = defineModel<Date | null>("to");

// fromとtoの内部変数
const from = ref(fromModel.value ?? new Date());
const to = ref(toModel.value ?? new Date());

// fromとtoの有効化/無効化スイッチ
const fromEnabled = ref(fromModel.value ? true : false);
const toEnabled = ref(toModel.value ? true : false);

// 日付選択メニュー用状態変数
const menu = ref(false);

// 表示テキストを算出
const displayText = computed(() => {
  if (!fromEnabled.value && !toEnabled.value) {
    return '指定なし';
  } else if (!fromEnabled.value) {
    return `～ ${formatDate(to.value)}`;
  } else if (!toEnabled.value) {
    return `${formatDate(from.value)} ～`;
  } else {
    return `${formatDate(from.value)} ～ ${formatDate(to.value)}`;
  }
});

// 日時の変更をv-modelに反映
watchEffect(() => {
  fromModel.value = fromEnabled.value ? from.value : null;
  toModel.value = toEnabled.value ? to.value : null;
});

// 日時のフォーマット(yyyy/MM/dd HH:mm)
function formatDate(date : Date) {
  return date.toLocaleString("ja-JP", {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
  })
}
</script>

<template>
  <v-menu v-model="menu" :close-on-content-click="false">
    <template #activator="{ props }">
      <v-text-field
        v-bind="props"
        v-model="displayText"
        :label="label"
        color="primary"
        density="compact"
        variant="outlined"
        readonly
        width="330" 
        hide-details
      />
    </template>
    <v-card>
      <v-card-text>
        <v-container>
          <v-row justify="start" class="align-center">
            <v-col cols="auto">
              <v-switch v-model="fromEnabled" color="success" inset density="compact" hide-details />
            </v-col>
            <v-col cols="auto">
              <span :class="{'text-grey':!fromEnabled}">期間(始)</span>
            </v-col>
            <v-col cols="auto">
              <DateTimeInput v-model="from" :disabled="!fromEnabled" />
            </v-col>
          </v-row>
          <v-row justify="start" class="align-center">
            <v-col cols="auto">
              <v-switch v-model="toEnabled" color="success" inset density="compact" hide-details />
            </v-col>
            <v-col cols="auto">
              <span :class="{'text-grey':!toEnabled}">期間(終)</span>
            </v-col>
            <v-col cols="auto">
              <DateTimeInput v-model="to" :disabled="!toEnabled" />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-menu>
</template>