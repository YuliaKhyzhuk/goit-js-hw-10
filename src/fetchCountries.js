const BASE_URL = 'https://restcountries.com';
// const API_KEY = '';

export const fetchCountries = name => {
  return fetch(
    //   `${BASE_URL}/v3.1/name/${name}&name.official&capital&population&flags.svg&languages`
    `${BASE_URL}/v3.1/name/${name}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};
