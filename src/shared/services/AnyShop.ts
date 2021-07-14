import axios from 'axios';

const AnyShop = axios.create({
  baseURL: process.env.ENDPOINT_ANYSHOP,
  headers: {
    common: {
      token: process.env.TOKEN_ANYSHOP,
      'content-type': 'application/x-www-form-urlencoded',
    },
  },
});

export default AnyShop;
