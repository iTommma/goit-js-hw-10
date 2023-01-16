'use strict';

export const createCountryList = data => {
    return data.map( el => {
        return `<li class="list_item">
            <img class="list_img" width="40px" src="${el.flags.svg}" alt="${el.name.official}">
            <h2 class="list_title">${el.name.official}</h2>
        </li>`;
    }).join('');
}


export const createCountryInfo = data => {
    return `
        <img class="info_img" width="40px" src="${data[0].flags.svg}" alt="${data[0].name.official}">
        <h2 class="info_title">${data[0].name.official}</h2>
        <p class="info_el">Capital: <span class="">${data[0].capital}</span> </p>
        <p class="info_el">Population: <span class="">${data[0].population}</span> </p>
        <p class="info_el">Languages: <span class="">${data[0].languages}</span></p>
        `;
}
