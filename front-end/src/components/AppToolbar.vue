<template>
  <v-toolbar app color="primary">
    <router-link :to="{ name: 'home' }">
      <v-toolbar-title class="white--text">
        Emotify
      </v-toolbar-title>
    </router-link>
  </v-toolbar>
</template>

<script>
export default {
  name: 'app-toolbar'
};
</script>

<style lang='stylus'>
  a {
    text-decoration: none;
  }
</style>
