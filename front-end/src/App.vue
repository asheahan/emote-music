<template>
  <v-app>
    <navigation-drawer />
    <app-toolbar />
    <transition name="fade">
      <router-view/>
    </transition>
  </v-app>
</template>

<script>
import NavigationDrawer from '@/components/NavigationDrawer';
import AppToolbar from '@/components/AppToolbar';

export default {
  name: 'app',
  components: {
    AppToolbar,
    NavigationDrawer
  }
}
</script>

<style lang="stylus">
  @require './stylus/main'

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>
