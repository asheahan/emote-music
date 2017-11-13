<template>
  <v-toolbar app color="primary">
    <v-toolbar-title class="white--text">
      {{ title }}
    </v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  name: 'app-toolbar',
  computed: {
    title() {
      return this.$route.meta.title;
    }
  }
};
</script>

<style lang='stylus'>
  a {
    text-decoration: none;
  }
</style>
