const BASE_URL = 'https://restcountries.com';
// const API_KEY = '';

export const fetchCountries = name => {
  return fetch(
    `${BASE_URL}/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  ).then(response => {
    //   `${BASE_URL}/v3.1/name/${name}?fields=name,capital,population,falgs,languages`
    //   `${BASE_URL}/v2/${name}?fields=name,capital,population,falgs,languages`
    // `${BASE_URL}/v3.1/name/${name}?fields=name.official,capital,population,flags,languages`;
    // `${BASE_URL}/v3.1/name/${name}`;
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};
