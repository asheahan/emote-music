<template>
  <v-list two-line>
    <v-list-tile avatar v-for="track in tracks" :key="track.id" @click="">
      <v-list-tile-avatar>
        <img :src="track.album.images[0].url" />
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title>{{ track.name }}</v-list-tile-title>
        <v-list-tile-sub-title>{{ track.artists[0].name }} - {{ track.album.name }}</v-list-tile-sub-title>
      </v-list-tile-content>
      <v-list-tile-action>
        <a :href="track.external_urls.spotify" target="_blank">
          <v-btn icon ripple>
            <v-icon color="green">play_arrow</v-icon>
          </v-btn>
        </a>
      </v-list-tile-action>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  name: 'play-list',
  props: {
    tracks: {
      type: Array,
      default: []
    }
  }
}
</script>

<style>

</style>
