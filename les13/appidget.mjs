import axios from 'axios';

const ithillelRes = await axios.get('https://api.restful-api.dev/objects', {
  params: {
    id: 'ff8081819782e69e01994e03dde84936'
  }
})

console.log(ithillelRes.data)
console.log(ithillelRes.status)
