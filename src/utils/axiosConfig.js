import axios from 'axios';

axios.interceptors.request.use((config) => {
  const token = (() => window.localStorage.getItem('send-it-token'))();
  return Object.assign({}, config, { headers: { Authorization: `Bearer ${token}` } });

}, (error) => {
  return Promise.reject(error);
});

export default axios;