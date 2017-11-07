<template>
  <v-app>
    <v-layout row class="mt-4">
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-title primary-title>
            <div class="headline">Manual Settings</div>
          </v-card-title>
          <v-card-text>
            <div class="subheading mb-2">Use the sliders below to adjust emotion settings. Click the button below to generate the Spotify playlist.</div>
            <v-slider label="Anger" v-model="settings.anger" thumb-label step="10" color="red darken-2"></v-slider>
            <v-slider label="Contempt" v-model="settings.contempt" thumb-label step="10" color="teal darken-2"></v-slider>
            <v-slider label="Disgust" v-model="settings.disgust" thumb-label step="10" color="light-green darken-2"></v-slider>
            <v-slider label="Fear" v-model="settings.fear" thumb-label step="10" color="blue-grey darken-2"></v-slider>
            <v-slider label="Happiness" v-model="settings.happiness" thumb-label step="10" color="orange darken-2"></v-slider>
            <v-slider label="Neutral" v-model="settings.neutral" thumb-label step="10" color="grey darken-2"></v-slider>
            <v-slider label="Sadness" v-model="settings.sadness" thumb-label step="10" color="blue darken-2"></v-slider>
            <v-slider label="Surprise" v-model="settings.surprise" thumb-label step="10" color="purple darken-2"></v-slider>
          </v-card-text>
          <v-card-actions>
            <v-btn flat outline>Generate Playlist</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  name: 'manual-page',
  data() {
    return {
      settings: {
        anger: 0,
        contempt: 0,
        disgust: 0,
        fear: 0,
        happiness: 0,
        neutral: 0,
        sadness: 0,
        surprise: 0
      }
    };
  }
}
</script>

<style>

</style>
