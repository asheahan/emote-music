<template>
  <v-app>
    <v-layout row class="mt-4">
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-title primary-title>
            <div class="headline">{{ name }}</div>
            <v-spacer />
            <v-btn outline @click="reset" v-if="showPlaylist && !loading">
              <v-icon>settings</v-icon>&nbsp;Settings
            </v-btn>
          </v-card-title>
          <v-card-text>
            <transition name="slide-fade">
              <div v-if="!showPlaylist">
                <v-tabs fixed icons centered dark>
                  <v-tabs-bar class="primary">
                    <v-tabs-slider color="accent" />
                    <v-tabs-item href="#upload" ripple>
                      <v-icon>file_upload</v-icon>
                      Upload
                    </v-tabs-item>
                    <v-tabs-item href="#capture">
                      <v-icon>photo_camera</v-icon>
                      Snap
                    </v-tabs-item>
                  </v-tabs-bar>
                  <v-tabs-items>
                    <v-tabs-content id="upload">
                      Upload
                    </v-tabs-content>
                    <v-tabs-content id="capture">
                      Snap a pic
                    </v-tabs-content>
                  </v-tabs-items>
                </v-tabs>
              </div>
              <div v-else>
                <div class="text-xs-center" v-if="loading">
                  <v-progress-circular indeterminate color="primary" :size="70" />
                </div>
                <div v-else>
                  <v-chip v-for="emotion in emotions" :key="emotion.emotion" outline :color="emotion.color">
                    <v-avatar :class="emotion.color">{{ emotion.value }}</v-avatar>{{ emotion.emotion }}</v-chip>
                  <play-list :tracks="tracks" />
                </div>
              </div>
            </transition>
          </v-card-text>
          <v-card-actions v-if="!showPlaylist">
            <v-btn flat outline @click="getPlaylist">Generate Playlist</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  name: 'image-page',
  data() {
    return {
      loading: false,
      showPlaylist: false
    };
  },
  computed: {
    name() {
      if (this.loading) {
        return 'Generating Playlist...';
      } else if (this.showPlaylist) {
        return 'Playlist';
      } else {
        return 'Facial Expression Detection';
      }
    }
  }
}
</script>

<style>

</style>
