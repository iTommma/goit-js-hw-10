import '../css/styles.css';
const DEBOUNCE_DELAY = 300;

// встановити lodash.debounce 
// $ npm i -g npm
// $ npm i --save lodash.debounce
var debounce = require('lodash.debounce');

// імпорт функцій
import { fetchRestCountries } from './restcountries-api';
import { createCountryList } from './countries';
import { createCountryInfo } from './countries'

// елементи HTML
const elSearchBox = document.querySelector('#search-box');
const elCountryList = document.querySelector('.country-list');
const elCountryInfo = document.querySelector('.country-info');

// // обробляю подію
onSearchBoxInput = () => {
    // event.preventDefault();

    // // забираємо зн. з поля вводу
    const searchedQuery = elSearchBox.value.trim();
    console.log(searchedQuery);

    debounce(() => {
      console.log("debounce 2000 ");
    }, 2000);

    // // обробляю відповідь сервера
    fetchRestCountries(searchedQuery)
    .then(data => {
        console.dir(data);

        // перевіряю що віддає сервер
        // якщо 1 країну ствоюрюю картку країни
        if (data.length === 1){
            console.log('LENGTH 1');
            elCountryList.innerHTML = '';
            elCountryInfo.innerHTML = createCountryInfo(data);
            console.dir(data[0].languages);
            return
        }
        // // якщо список до 10 країн створюю HTML список країн
        if (data.length < 10){
            console.log('ARR LENGTH < 10');
            elCountryInfo.innerHTML = '';
            elCountryList.innerHTML = createCountryList(data);
            return
        }
        // якщо список більше 10 країн
        console.log('ARR LENGTH > 10');
        elCountryList.innerHTML = '';
        elCountryInfo.innerHTML = '';
        return
    })
    .catch(err => {
        console.log('catch', err);
        });
    }

// // ловлю подію в полі пошуку
elSearchBox.addEventListener(
    'input',
    debounce(() => {
        console.log("Scroll handler call after 300ms pause");
        onSearchBoxInput();
    }, 1000)
  );




