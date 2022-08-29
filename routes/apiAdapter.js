const axios = require("axios");

const { TIMEOUT } = process.env;

module.exports = (baseUrl) => {
  return axios.create({
    baseURL: baseUrl,
    TIMEOUT: 5000,
  });
};
