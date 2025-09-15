import axios from 'axios';

const hellelApi = await axios.get('https://api.restful-api.dev/objects', {
  params: {
    id: 'ff8081819782e69e01994e4990a749dc',
  },
});
console.log(hellelApi.data);

const res = await axios.post(
  'https://api.restful-api.dev/objects',

  {
    name: 'Apple Hillel MacBook Pro 16',
    data: {
      year: 2019,
      price: 1849.99,
      'CPU model': 'Intel Core i9',
      'Hard disk size': '1 TB',
    },
  },
);
console.log(res.status);
console.log(res.data);
