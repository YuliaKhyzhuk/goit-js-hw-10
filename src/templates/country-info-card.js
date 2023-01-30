export const createCountryInfoCard = countryInfo => {
  const countryInfoCard = countryInfo.map(el => {
    let countryLanguages = Object.values(el.languages).join(', ');

    return `
    <div class="country_card">
    <h2 class="country-name"><img src="${el.flags.svg}" alt="flag of ${el.name.official}" class="country_card-img" width='30px'>${el.name.common}</h2>
    <ul class="country-info list">
    <li class="country-info-item"><p class="capital"><span class="country-info-item__bald">Capital:</span> ${el.capital}</p></li>
    <li class="country-info-item"><p class="population"><span class="country-info-item__bald">Population:</span> ${el.population}</p></li>
    <li class="country-info-item"><p class="languages"><span class="country-info-item__bald">Languages:</span> ${countryLanguages}</p></li>
    </ul></div>`;
  });

  return countryInfoCard.join('');
};
