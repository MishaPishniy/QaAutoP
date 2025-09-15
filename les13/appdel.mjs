import axios from 'axios';

const ID = 'ff8081819782e69e01994e4990a749dc';

const delRes = await axios.delete(`https://api.restful-api.dev/objects/${ID}`);
console.log(delRes.data);
console.log(delRes.status);
