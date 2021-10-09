<template>
  <v-container>
    <v-card>
      <v-card-text>
        <app-text-field
          v-model="customValue"
          label="나이"
          :counter="10"
          placeholder="여기에 입력해주세요"
          :error-messages="['error-메시지']"
        />
        <app-text-field
          v-model="customValue"
          label="나이"
          :counter="10"
          placeholder="여기에 입력해주세요"
          :error-messages="['error-메시지']"
        />
        <app-text-field
          v-model="customValue"
          label="닉네임"
          :counter="10"
          placeholder="여기에 입력해주세요"
          :error-messages="['error-메시지']"
        />
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import AppTextField from '@/components/app/TextField'
export default {
  components: {
    AppTextField
  },
  data: () => ({
    customValue: null,
  }),

}
</script>
<style>

</style>
