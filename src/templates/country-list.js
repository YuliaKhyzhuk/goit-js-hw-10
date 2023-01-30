export const createCountryList = countryInfo => {
  const countryListInfo = countryInfo.map(el => {
    return `   
        <li class="country-list-item">
        <img src="${el.flags.svg}" alt="flag of ${el.name.official}" class="gallery-img" width='40px'>
        ${el.name.common}
        </li>
  `;
  });
  return countryListInfo.join('');
};
