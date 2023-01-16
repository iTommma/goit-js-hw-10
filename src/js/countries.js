'use strict';

// // 
export const createCountryList = data => {
    return data.map( el => {
        return `<li class="list_item">
            <img class="list_img" width="40px" src="${el.flags.svg}" alt="${el.name.official}">
            <h2 class="list_title">${el.name.official}</h2>
        </li>`;
    }).join('');
}

// // 
export const createCountryInfo = data => {
    const country = data[0];
    const countryLangArr = Object.values( country.languages );
    const countryLangList = countryLangArr.join(', ');
    return `
        <img class="info_img" width="40px" src="${country.flags.svg}" alt="${country.name.official}">
        <h2 class="info_title">${country.name.official}</h2>
        <p class="info_el">Capital: <span class="">${country.capital}</span> </p>
        <p class="info_el">Population: <span class="">${country.population}</span> </p>
        <p class="info_el">Languages: <span class="">${countryLangList}</span></p>
        `;
}