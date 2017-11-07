<template>
  <div>
    <app-toolbar/>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import AppToolbar from '@/components/AppToolbar';

export default {
  name: 'app',
  components: {
    AppToolbar
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
