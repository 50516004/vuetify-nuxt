<script lang="ts" setup>
  useHead({ title: "フォームサンプル" });

  /** フォーム参照 */
  const formRef = useTemplateRef("form");
  /** フォーム状態 */
  const ready = ref(false);

  /** フォームデータ */
  const name = ref("");
  const select = ref(null);
  const checkbox = ref(false);

  /** ドロップダウンリスト */
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

  /** バリデーションルール */
  const nameRules = [
    (v: string) => !!v || "Name is required",
    (v: string) =>
      (v && v.length <= 10) || "Name must be 10 characters or less",
  ];

  /** バリデーション実行 */
  async function validate() {
    const result = await formRef.value?.validate();
    if (result?.valid) alert("Form is valid");
  }

  /** フォームリセット */
  function reset() {
    formRef.value?.reset();
  }

  /** バリデーションリセット */
  function resetValidation() {
    formRef.value?.resetValidation();
  }
</script>

<template>
  <v-container>
    <v-card width="300">
      <v-card-title class="font-weight-bold">フォームサンプル</v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="ready">
          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Name"
            variant="outlined"
            color="primary"
          ></v-text-field>

          <v-select
            v-model="select"
            :items="items"
            :rules="[(v) => !!v || 'Item is required']"
            label="Item"
            variant="outlined"
            color="primary"
          ></v-select>

          <v-checkbox
            v-model="checkbox"
            :rules="[(v) => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            variant="outlined"
            color="primary"
          ></v-checkbox>

          <div class="d-flex flex-column">
            <v-btn class="mt-4" color="success" @click="validate">
              バリデーション実行
            </v-btn>

            <v-btn class="mt-4" color="error" @click="reset">
              フォームリセット
            </v-btn>

            <v-btn class="mt-4" color="warning" @click="resetValidation">
              バリデーションリセット
            </v-btn>

            <v-btn class="mt-4" color="primary" :disabled="!ready">送信</v-btn>
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>
