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
</style>
