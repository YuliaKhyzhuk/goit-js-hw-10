import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';
import { createCountryList } from './templates/country-list.js';
import { createCountryInfoCard } from './templates/country-info-card.js';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
// const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

const searchInputEl = document.querySelector('#search-box');
const countryListEl = document.querySelector('.country-list');
const countryInfoEl = document.querySelector('.country-info');

const onSearchInput = event => {
  const searchedQuery = searchInputEl.value.trim();

  if (searchedQuery === '') {
    countryInfoEl.innerHTML = '';
    countryListEl.innerHTML = '';
    return;
  }

  fetchCountries(searchedQuery)
    .then(data => {
      //   console.dir(data);
      // console.log(data);

      if (data.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }
      if (data.length > 1 && data.length < 11) {
        countryListEl.innerHTML = createCountryList(data);
        countryInfoEl.innerHTML = '';
      }
      if (data.length === 1) {
        countryInfoEl.innerHTML = createCountryInfoCard(data);
        countryListEl.innerHTML = '';
      }
    })
    .catch(err => {
      if (err.message === '404') {
        Notiflix.Notify.failure('Oops, there is no country with that name');
      }
    });
};

searchInputEl.addEventListener(
  'input',
  debounce(onSearchInput, DEBOUNCE_DELAY)
);
