import axios from 'axios';

const res = await axios.get('https://api.restful-api.dev/objects');
console.log(res.data);
