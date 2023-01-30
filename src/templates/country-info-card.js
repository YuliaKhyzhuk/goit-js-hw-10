export const createCountryInfoCard = countryInfo => {
  const countryInfoCard = countryInfo.map(el => {
    let countryLanguages = Object.values(el.languages).join(', ');
    // countryLanguages;
    console.log(countryLanguages);
    return `
    <div class="country_card">
    <h2 class="country-name"><img src="${el.flags.svg}" alt="flag of ${el.name.official}" class="gallery-img" width='40px'>${el.name.common}</h2>
    <ul class="country-info list">
    <li class="country-info item"><p class="capital">Capital: ${el.capital}</p></li>
    <li class="country-info item"><p class="population">Population: ${el.population}</p></li>
    <li class="country-info item"><p class="languages">Languages: ${countryLanguages}</p></li>
    </ul></div>`;
  });
  return countryInfoCard.join('');
};
