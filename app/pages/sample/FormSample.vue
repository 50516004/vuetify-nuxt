<script lang="ts" setup>
  useHead({ title: "フォーム" });

  const form = useTemplateRef("form");
  const name = ref("");
  const ready = ref(false);

  const nameRules = [
    (v: string) => !!v || "Name is required",
    (v: string) =>
      (v && v.length <= 10) || "Name must be 10 characters or less",
  ];
  const select = ref(null);
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];
  const checkbox = ref(false);

  const validate = async () => {
    const result = await form.value?.validate();
    if (result?.valid) alert("Form is valid");
  };

  const reset = () => {
    form.value?.reset();
  };

  const resetValidation = () => {
    form.value?.resetValidation();
  };
</script>

<template>
  <v-sheet class="mx-auto" width="300">
    <v-form ref="form" v-model="ready">
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
      ></v-text-field>

      <v-select
        v-model="select"
        :items="items"
        :rules="[(v) => !!v || 'Item is required']"
        label="Item"
        required
      ></v-select>

      <v-checkbox
        v-model="checkbox"
        :rules="[(v) => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox>

      <div class="d-flex flex-column">
        <v-btn class="mt-4" color="success" block @click="validate">
          Validate
        </v-btn>

        <v-btn class="mt-4" color="error" block @click="reset">
          Reset Form
        </v-btn>

        <v-btn class="mt-4" color="warning" block @click="resetValidation">
          Reset Validation
        </v-btn>
      </div>
      {{ ready ? "good" : "bad" }}
    </v-form>
  </v-sheet>
</template>
