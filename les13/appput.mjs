import axios from 'axios';

const ID = 'ff8081819782e69e01994e4990a749dc'

let ithillelRes = await axios.get('https://api.restful-api.dev/objects', {
  params: {
    id: ID
  }
})
console.log(ithillelRes.data)
console.log(ithillelRes.status)

const putRes = await axios.put(`https://api.restful-api.dev/objects/${ID}`, {
  "name": "ITHILLEL MacBook Pro 25",
  "data": {
    "year": 2024,
    "price": 1849.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB"
  }
})
console.log(putRes.data)
console.log(putRes.status)


ithillelRes = await axios.get('https://api.restful-api.dev/objects', {
  params: {
    id: ID
  }
})
console.log(ithillelRes.data)
console.log(ithillelRes.status)