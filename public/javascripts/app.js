// app.js

new Vue({
  el: '#app',
  data: { // register any values or collections that hold data for app
    image: '',
    scores: '',
    tracks: []
  },
  ready: function () { }, // anything within ready function will run when application loads
  methods: { // methods we want to use in application registered here
    onFileChange (e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;

      this.uploadImage(files[0]);
      this.createImage(files[0]);
    },
    createImage (file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = function (e) {
        vm.image = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    uploadImage (file) {
      var data = new FormData();
      data.append('file', file);
      var vm = this;

      vm.$http.post('/image/upload', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(function (resp) {
        vm.scores = resp.body.data.rawScores;

        var config = {
          w: document.getElementById('results').offsetWidth
        };

        RadarChart.draw('.results', resp.body.data.scores, config);
      });
    },
    removeImage: function (e) {
      this.image = '';
      d3.select('.results').remove();
    },
    getPlaylist: function () {
      var vm = this;

      vm.$http.get('/playlist/recommend', { params: vm.scores })
      .then(function (resp) {
        vm.tracks = resp.body.data;
        console.log(resp.body);
      });
    }
  }
});