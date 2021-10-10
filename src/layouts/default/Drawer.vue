<template>
  <v-navigation-drawer
    v-model="drawer"
    v-bind="$attrs"
    dark
    app
    :src="require('@/assets/trees-6556336_1920.jpg')"
  >
    <template v-slot:img="props">
      <v-img
        :gradient="gradient"
        v-bind="props"
      />
    </template>
    <default-drawer-header />
    <v-divider />
    <default-list :items="items" />
  </v-navigation-drawer>
</template>
<script>
import { mapState } from 'vuex'
import DefaultList from './List'
import DefaultDrawerHeader from './DrawHeader'

export default {
  name: 'DefaultDrawer',
  components: {DefaultList, DefaultDrawerHeader},
  computed: {
    ...mapState('app', ['gradient', 'items']),
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
