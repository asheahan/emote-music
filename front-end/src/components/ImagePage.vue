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
                    <!--<v-tabs-item href="#capture">
                        <v-icon>photo_camera</v-icon>
                        Snap
                      </v-tabs-item>-->
                  </v-tabs-bar>
                  <v-tabs-items>
                    <v-tabs-content id="upload" class="pt-4">
                      <div class="dropbox" v-if="!image">
                        <input type="file" :name="uploadFieldName" :disabled="isUploading" @change="onFileChange" accept="image/*" class="input-file">
                        <p v-if="isUploading">
                          Processing image...
                        </p>
                        <p v-else>
                          Drag your file here to begin<br> or click to browse
                        </p>
                      </div>
                      <div v-else>
                        <v-btn @click="removeImage" outline>Reset</v-btn>
                        <v-container grid-list-lg text-xs-center>
                          <v-layout row wrap>
                            <v-flex xs12>
                              <v-card color="blue-grey darken-2" class="white--text">
                                <img :src="image" class="emotion-image" height="300">
                              </v-card>
                            </v-flex>
                            <v-flex xs12>
                              <v-card>
                                <v-card-title>
                                  <v-toolbar dark color="primary">
                                    <v-toolbar-title class="white--text">
                                      Emotion Attributes
                                    </v-toolbar-title>
                                  </v-toolbar>
                                </v-card-title>
                                <v-card-text>
                                  <emotion-chart :data="chartScores" />
                                </v-card-text>
                              </v-card>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </div>
                    </v-tabs-content>
                    <!--<v-tabs-content id="capture">
                        Snap a pic
                      </v-tabs-content>-->
                  </v-tabs-items>
                </v-tabs>
              </div>
              <div v-else>
                <div class="text-xs-center" v-if="loading">
                  <v-progress-circular indeterminate color="primary" :size="70" />
                </div>
                <div v-else>
                  <!--<v-chip v-for="emotion in emotions" :key="emotion.emotion" outline>
                                    <v-avatar>{{ emotion.value }}</v-avatar>{{ emotion.emotion }}</v-chip>-->
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
import { uploadImage, getPlaylist } from '@/api';
import EmotionChart from '@/components/EmotionChart';
import PlayList from '@/components/PlayList';

export default {
  name: 'image-page',
  components: {
    EmotionChart,
    PlayList
  },
  data() {
    return {
      image: '',
      isUploading: false,
      loading: false,
      showPlaylist: false,
      uploadFieldName: 'emotionImage',
      scores: {},
      chartScores: [],
      tracks: []
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
  },
  methods: {
    onFileChange(e) {
      this.isUploading = true;

      let files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;

      this.uploadImage(files[0])
        .then(() => {
          this.createImage(files[0]);
          this.isUploading = false;
        });
    },
    uploadImage(file) {
      let data = new FormData();
      data.append('file', file);

      return uploadImage(data)
        .then(result => {
          this.scores = result.rawScores;
          this.chartScores = result.scores;
          return;
        });
    },
    createImage(file) {
      let image = new Image();
      let reader = new FileReader();

      reader.onload = e => {
        this.image = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    getPlaylist() {
      this.showPlaylist = true;
      this.loading = true;
      getPlaylist(this.scores)
        .then(data => {
          this.loading = false;
          this.tracks = data.tracks;
        })
        .catch(err => {
          this.loading = false;
          console.error(err.message);
        });
    },
    removeImage() {
      this.image = '';
      this.scores = {};
      this.chartScores = [];
    },
    reset() {
      this.tracks = [];
      this.showPlaylist = false;
    }
  }
}
</script>

<style lang="stylus">
  .dropbox {
    outline: 2px dashed grey;
    outline-offset: -10px;
    background: lightcyan;
    color: dimgray;
    padding: 0px 0px;
    min-height: 400px;
    position: relative;
    cursor: pointer;
  }

  .input-file {
    opacity: 0;
    width: 100%;
    height: 400px;
    position: absolute;
    cursor: pointer;
  }

  .dropbox:hover {
    background: lightblue;
  }

  .dropbox p {
    font-size: 1.2 em;
    text-align: center;
    padding: 50px 0;
  }

  .image-emotion {
    max-width: 50%;
  }

  .results {
    display: inline-block;
  }
</style>
