<template>
  <v-navigation-drawer app :mini-variant.sync="mini" v-model="drawer">
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>Emotify</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon @click.native.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider />
    <v-list class="pt-0" dense>
      <v-divider />
      <v-list-tile v-for="item in items" :key="item.name" @click="goToRoute(item.name)">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'navigation-drawer',
  data() {
    return {
      drawer: true,
      mini: true,
      items: []
    };
  },
  created() {
    this.$router.options.routes.forEach(route => {
      this.items.push({
        name: route.name,
        path: route.path,
        title: route.meta.title,
        icon: route.meta.icon
      });
    });
  },
  methods: {
    goToRoute(name) {
      this.$router.push({ name });
    }
  }
}
</script>

<style>

</style>
