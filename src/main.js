//У файлі main.js напиши всю логіку роботи додатка. Виклики нотифікацій iziToast, усі перевірки на довжину масиву в отриманій відповіді та логіку прокручування сторінки (scroll) робимо саме в цьому файлі. Імпортуй в нього функції із файлів pixabay-api.js та render-functions.js та викликай їх у відповідний момент.

import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, showLoadMoreButton } from "./js/render-functions";

console.log(getImagesByQuery('cat', 5));
let images = getImagesByQuery('cat', 10);
console.log(images);
createGallery(images);
showLoadMoreButton();
