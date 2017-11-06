<template>
  <v-app>
    <v-parallax :src="image" height="900">
      <v-layout column align-center justify-center>
        <h1>
          <span class="accent--text">Emot</span>ify</h1>
        <h4 class="white--text">Create Spotify playlists based on emotions</h4>
        <div>
          <v-btn outline color="white">Use image</v-btn>
          <router-link :to="{ name: 'manual' }">
            <v-btn outline color="white">Manual</v-btn>
          </router-link>
        </div>
      </v-layout>
    </v-parallax>
  </v-app>
</template>

<script>
import image from '@/assets/road-image.jpg';

export default {
  data() {
    return {
      image
    };
  }
}
</script>

<style lang="stylus">

</style>
