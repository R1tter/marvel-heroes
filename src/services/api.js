import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gateway.marvel.com',
  // baseURL: 'https://api.marvelql.com/',
});

export default api;
