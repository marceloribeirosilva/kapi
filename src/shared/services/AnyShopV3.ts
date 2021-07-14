import axios from 'axios';

const AnyShopV3 = axios.create({
  baseURL: process.env.ENDPOINT_ANYSHOP_V3,
  timeout: 600000,
  headers: {
    common: {
      token: process.env.TOKEN_ANYSHOP_V3,
      'content-type': 'application/json',
    },
  },
});

export default AnyShopV3;
