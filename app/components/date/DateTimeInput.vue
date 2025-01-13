<script lang="ts" setup>

// 日時データモデル
const modelValue = defineModel<Date>();
// 無効化プロパティ
const { disabled } = defineProps<{
  disabled? : boolean | undefined;
}>();

// 日時データから日付部分を抽出して管理
const date = ref(modelValue.value ? new Date(modelValue.value) : new Date());
const hour = ref(date.value.getHours());
const minute = ref(date.value.getMinutes());

// 日付選択メニュー用状態変数
const menuDate = ref(false);

// 日付のフォーマット
const formatted = computed(() => formatDate(date.value));

// 日付、時刻の変更をmodelValueに反映
watchEffect(() => {
  const newDate = new Date(date.value);
  newDate.setHours(hour.value, minute.value);
  modelValue.value = newDate;
});

// 日時のフォーマット(yyyy/MM/dd)
function formatDate(date : Date) {
  return date.toLocaleString("ja-JP", {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
  })
}

</script>

<template>
  <v-row justify="start" no-gutters>
    <v-col cols="auto">
      <v-menu v-model="menuDate" :close-on-content-click="false">
        <template #activator="{ props }">
          <v-text-field
            v-bind="props"
            v-model="formatted"
            label="日付"
            color="primary"
            density="compact"
            variant="outlined"
            readonly
            width="130" 
            hide-details
            :disabled="disabled"
          />
        </template>
        <v-date-picker 
          v-model="date" 
          elevation="10" 
          hide-header
          hide-weekdays
          @update:model-value="menuDate = false"
        />
      </v-menu>
    </v-col>
    <v-col cols="auto">
      <v-autocomplete
        v-model="hour"
        label="時"
        :items="Array.from({ length: 24 }, (_, i) => i)"
        :item-title="i => i.toString().padStart(2, '0')"
        color="primary"
        density="compact"
        variant="outlined"
        width="100" 
        hide-details
        :disabled="disabled"
      />
    </v-col>
    <v-col cols="auto">
      <v-autocomplete
        v-model="minute"
        label="分"
        :items="Array.from({ length: 60 }, (_, i) => i)"
        :item-title="i => i.toString().padStart(2, '0')"
        color="primary"
        density="compact"
        variant="outlined"
        width="100" 
        hide-details
        :disabled="disabled"
      />
    </v-col>
  </v-row>
</template>