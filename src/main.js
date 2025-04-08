//У файлі main.js напиши всю логіку роботи додатка. Виклики нотифікацій iziToast, усі перевірки на довжину масиву в отриманій відповіді та логіку прокручування сторінки (scroll) робимо саме в цьому файлі. Імпортуй в нього функції із файлів pixabay-api.js та render-functions.js та викликай їх у відповідний момент.

import { getImagesByQuery } from "./js/pixabay-api";
import { clearGallery, createGallery, hideLoader, showLoader, showLoadMoreButton } from "./js/render-functions";
import iziToast from 'izitoast';
const form = document.querySelector('.form');
import "izitoast/dist/css/iziToast.min.css";
// console.log(getImagesByQuery('cat', 5));
// let images = getImagesByQuery('cat', 10);
// console.log(images);
// createGallery(images);
// showLoadMoreButton();


form.addEventListener('submit', event => {
    event.preventDefault();
  const query = form.elements['search-text'].value;
  clearGallery();
  if (query === '') { 
    iziToast.error({
      message: 'Please enter a search query!',
      position: 'topRight',
      timeout: 3000
    });
    return;
  }
  // console.log('submit', event.target.elements['search-text'].value);
  showLoader();
  const data = getImagesByQuery(query);
  data.then(response => {
    if (response.hits.length === 0) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        timeout: 3000
      });
      return;
    }
      createGallery(response.hits);
      showLoadMoreButton();
  }).catch(() => {
    iziToast.error({ message: "Error fetching data from Pixabay", position: 'topCenter', timeout: 3000 });
  })
    .finally(() => {
      hideLoader();
    });
  form.reset();
});