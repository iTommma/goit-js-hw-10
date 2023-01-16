'use strict';

const BASE_URL = 'https://restcountries.com';
const API_KEY = '';

export const fetchRestCountries = cityName => {
  // const searchParams = new URLSearchParams({
  //   q: cityName,
  //   units: 'metric',
  //   lang: 'ua',
  //   appid: API_KEY,
  // });

  // return fetch(`${BASE_URL}/data/2.5/weather?${searchParams}`).then(
  //   response => {
  //     if (!response.ok) {
  //       throw new Error(response.status);
  //     }

  //     return response.json();
  //   }
  // );

  return fetch(`${BASE_URL}/v3.1/name/${cityName}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    }
  );
};
