import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dtmoney.daniilo.dev/api',
});
