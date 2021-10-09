<template>
  <v-container>
    <v-card class="pa-3">
      <v-card-title>Form Validation</v-card-title>
      <v-card-text>
        <validation-observer
          ref="observer"
          v-slot="{ invalid }"
        >
          <v-form @submit.prevent="submit">
            <validation-provider
              v-slot="{ errors }"
              name="Name"
              :rules="{
                required: true,
                max: 10,
              }"
            >
              <v-text-field
                v-model="name"
                label="Name"
                :counter="10"
                :error-messages="errors"
              />
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="PhoneNumber"
              :rules="{
                required: true,
                numeric: true,
                digits: 11,
              }"
            >
              <v-text-field
                v-model="phoneNumber"
                label="PhoneNumber"
                :counter="11"
                :error-messages="errors"
              />
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="E-Mail"
              :rules="{
                required: true,
                email: true,
              }"
            >
              <v-text-field
                v-model="email"
                label="E-Mail"
                :error-messages="errors"
              />
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="Select"
              :rules="{
                required: true,
              }"
            >
              <v-select
                v-model="select"
                label="Select"
                :items="items"
                :error-messages="errors"
              />
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="Checkbox"
              :rules="{
                required: true,
              }"
            >
              <v-checkbox
                v-model="checkbox"
                label="Checkbox"
                value="1"
                :error-messages="errors"
              />
            </validation-provider>
            <v-btn
              class="mr-4"
              color="primary"
              type="submit"
              :disabled="invalid"
            >
              submit
            </v-btn>
            <v-btn>
              clear
            </v-btn>
          </v-form>
        </validation-observer>
      </v-card-text>
    </v-card>
    <v-card>
      <v-card-text>
        <label>
          나이
          <v-text-field
            class="m-1"
            outlined
            dense
          />
        </label>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: 'Forms',
  data: () => ({
    name: null,
    phoneNumber: null,
    email: null,
    select: null,
    checkbox: null,
    items: [
      {text: '아이템1', value: 1},
      {text: '아이템2', value: 2},
      {text: '아이템3', value: 3}
    ]
  }),
  methods: {
    submit() {
      this.$refs.observer.validate().then(result => {
        if (result) {
          alert('양식제출');
        }
      })
    },
    clear() {
      this.name = null;
      this.phoneNumber = null;
      this.email = null;
      this.select = null;
      this.checkbox = null;
    }
  },
}
</script>
<style>

</style>
