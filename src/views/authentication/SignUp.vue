<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="auto">
        <router-link to="/">
          <v-img
            class="mx-auto mb-6"
            width="120"
            :src="require('@/assets/logo.png')"
          />
        </router-link>
        <v-card width="460">
          <v-card-text class="text-center px-12 py-16">
            <validation-observer
              ref="observer"
              v-slot="{invalid}"
            >
              <v-form @submit.prevent="signUp">
                <div class="text-h4 font-weight-black mb-10">
                  회원가입
                </div>
                <validation-provider
                  v-slot="{errors}"
                  name="이메일"
                  :rules="{required:true}"
                >
                  <v-text-field
                    v-model="email"
                    label="이메일"
                    clearable
                    prepend-icon="mdi-email"
                    :error-messages="errors"
                  />
                </validation-provider>
                <validation-provider
                  v-slot="{errors}"
                  name="비밀번호"
                  :rules="{required:true}"
                  :error-messages="errors"
                >
                  <v-text-field
                    v-model="password"
                    label="비밀번호"
                    clearable
                    prepend-icon="mdi-lock-outline"
                  />
                </validation-provider>
                <validation-provider
                  v-slot="{errors}"
                  name="비밀번호 확인"
                  :rules="{required:true,confirmed:'비밀번호'}"
                >
                  <v-text-field
                    v-model="passwordConfirm"
                    label="비밀번호 확인"
                    clearable
                    prepend-icon="mdi-lock-outline"
                    :error-messages="errors"
                  />
                </validation-provider>
                <v-btn
                  class="mt-6"
                  block
                  x-large
                  rounded
                  color="primary"
                  :disabled="invalid"
                >
                  가입하기
                </v-btn>
              </v-form>
            </validation-observer>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'SignUp',
  data: () => ({
    email: null,
    password: null,
    passwordConfirm: null
  }),
  methods: {
    async signUp() {
      const result = await this.$refs.observer.validate();
      if (result) {
        alert('회원가입 맨')
      }
    }
  }
}
</script>
<style>

</style>
