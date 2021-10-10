<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <v-app-bar-nav-icon @click="drawer = !drawer" />
    <v-spacer />
  </v-app-bar>
</template>
<script>
export default {
  name: 'DefaultBar',
  computed : {
    drawer : {
      get () {
        return this.$store.getters['app/getDrawer']
      },
      set (value) {
        return this.$store.dispatch('app/toggleDrawer', value)
      }
    }
  }
}
</script>
<style>

</style>
