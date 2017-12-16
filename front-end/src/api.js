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

export const uploadImage = data => {
  return http
    .post('/emotions/image', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(res => {
      if (res.status === 200) {
        return res.data.data;
      } else {
        return Promise.reject(new Error('Error uploading image'));
      }
    });
};
