<template>
  <v-card>
    <v-card-title>
      {{ title }}
    </v-card-title>
    <v-data-table
      v-bind="$attrs"
      v-on="$listeners"
    />
  </v-card>
</template>
<script>
export default {
  name: 'AppDataTable',
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      default: null,
    },
  }
}
</script>
<style>

</style>
