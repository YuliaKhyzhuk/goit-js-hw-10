import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';

const DEBOUNCE_DELAY = 300;

const searchFormEl = document.querySelector('#search-box');
const countryListEl = document.querySelector('.country-list');
const countryInfoEl = document.querySelector('.country-info');

const onSearchFormInput = event => {
  event.preventDefault();

  const searchedQuery = searchFormEl.value.trim();
  //   console.log(searchedQuery);

  fetchCountries(searchedQuery)
    .then(data => {
      console.log(data);

      countryListEl.innerHTML = createCountryList(data);
      countryInfoEl.innerHTML = createCountryInfoCard(data);
    })
    .catch(err => {
      if (err.message === '404') {
        // alert('Oops, there is no country with that name');
        console.log('Oops');
      }
    });
};

searchFormEl.addEventListener('input', onSearchFormInput);
