import axios from 'axios';
const API_URL = 'https://api.thecatapi.com/v1/';
const endpoints = {
  search: API_URL + 'images/search',
};

export const getRandomCat = () => {
  return axios
    .get(endpoints.search)
    .then(function (res) {
      return res.data;
    })
    .catch(function (err) {
      return err;
    });
};
