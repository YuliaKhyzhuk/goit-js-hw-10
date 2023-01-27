import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';

const DEBOUNCE_DELAY = 300;

const searchFormEl = document.querySelector('#search-box');
const countryListEl = document.querySelector('.country-list');
const countryInfoEl = document.querySelector('.country-info');
