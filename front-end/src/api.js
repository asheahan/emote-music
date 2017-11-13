import axios from 'axios';

let http = axios.create({
  baseURL: process.env.API_URL
});

export const getPlaylist = params => {
  return http
    .get('/playlist/recommend', {
      params
    })
    .then(res => {
      if (res.status === 200) {
        return res.data.data;
      } else {
        return Promise.reject(new Error('Error getting playlist'));
      }
    });
};
