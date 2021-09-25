<template>
  <v-container>
    <v-card
      class="pa-3"
      outlined
    >
      <p class="text-h1 font-weight-black">
        Heading 1
      </p>
      <p class="text-h2">
        Heading 1
      </p>
      <p class="text-h3">
        Heading 1
      </p>
      <p class="text-h4 text-sm-body-1">
        Heading 1
      </p>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    dialog: false
  }),
  computed: {
    height () {
      switch (this.$vuetify.breakpoint.name){
        case 'xs': return 100
        case 'sm': return 200
        case 'md': return 300
        case 'lg': return 400
        default: return 500
      }
    }
  }
}
</script>
<style>

</style>
