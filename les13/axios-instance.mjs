import axios from 'axios';

const axiosInstanse = axios.create({
  baseURL: 'https://api.restful-api.dev',
  headers: {
    Authorization: 'Bearer 321413kljkljfklasjlkxmaskl',
  },
  auth: {
    password: '1234',
    username: 'test',
  },
});

const res = await axiosInstanse.get('/objects');
console.log(res.data);
