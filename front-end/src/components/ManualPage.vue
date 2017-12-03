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
                <div class="subheading mb-2">Use the sliders below to adjust emotion settings. Click the button below to generate the Spotify playlist.</div>
                <v-slider label="Anger" v-model="settings.anger.value" thumb-label step="10" :color="settings.anger.color" />
                <v-slider label="Contempt" v-model="settings.contempt.value" thumb-label step="10" :color="settings.contempt.color" />
                <v-slider label="Disgust" v-model="settings.disgust.value" thumb-label step="10" :color="settings.disgust.color" />
                <v-slider label="Fear" v-model="settings.fear.value" thumb-label step="10" :color="settings.fear.color" />
                <v-slider label="Happiness" v-model="settings.happiness.value" thumb-label step="10" :color="settings.happiness.color" />
                <v-slider label="Neutral" v-model="settings.neutral.value" thumb-label step="10" :color="settings.neutral.color" />
                <v-slider label="Sadness" v-model="settings.sadness.value" thumb-label step="10" :color="settings.sadness.color" />
                <v-slider label="Surprise" v-model="settings.surprise.value" thumb-label step="10" :color="settings.surprise.color" />
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
import _ from 'lodash';
import { getPlaylist } from '@/api';
import PlayList from '@/components/PlayList';

export default {
  name: 'manual-page',
  data() {
    return {
      settings: {
        anger: {
          value: 0,
          color: 'red darken-2'
        },
        contempt: {
          value: 0,
          color: 'teal darken-2'
        },
        disgust: {
          value: 0,
          color: 'light-green darken-2'
        },
        fear: {
          value: 0,
          color: 'blue-grey darken-2'
        },
        happiness: {
          value: 0,
          color: 'orange darken-2'
        },
        neutral: {
          value: 0,
          color: 'grey darken-2'
        },
        sadness: {
          value: 0,
          color: 'blue darken-2'
        },
        surprise: {
          value: 0,
          color: 'purple darken-2'
        }
      },
      showPlaylist: false,
      tracks: [],
      loading: false
    };
  },
  computed: {
    emotions() {
      let settings = [];
      _.forEach(this.settings, (value, key) => {
        if (value.value > 0) {
          settings.push({ emotion: key, color: value.color, value: value.value });
        }
      });
      return settings;
    },
    name() {
      if (this.loading) {
        return 'Generating Playlist...';
      } else if (this.showPlaylist) {
        return 'Playlist';
      } else {
        return 'Emotion Settings';
      }
    }
  },
  methods: {
    getPlaylist() {
      this.showPlaylist = true;
      this.loading = true;
      getPlaylist(_.mapValues(this.settings, emotion => emotion.value))
        .then(data => {
          this.loading = false;
          this.tracks = data.tracks;
        })
        .catch(err => {
          this.loading = false;
          console.error(err.message);
        });
    },
    reset() {
      this.showPlaylist = false;
      this.tracks = [];
    }
  },
  components: {
    PlayList
  }
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */

{
  transform: translateX(10px);
  opacity: 0;
}
</style>
