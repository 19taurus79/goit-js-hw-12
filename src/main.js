//У файлі main.js напиши всю логіку роботи додатка. Виклики нотифікацій iziToast, усі перевірки на довжину масиву в отриманій відповіді та логіку прокручування сторінки (scroll) робимо саме в цьому файлі. Імпортуй в нього функції із файлів pixabay-api.js та render-functions.js та викликай їх у відповідний момент.

import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  hideLoadMoreButton,
  showLoader,
  showLoadMoreButton,
} from './js/render-functions';
import iziToast from 'izitoast';
const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');
import 'izitoast/dist/css/iziToast.min.css';
let inputValue = '';
let page = 10;

form.addEventListener('submit', async event => {
  event.preventDefault();
  inputValue = form.elements['search-text'].value;
  clearGallery();
  if (inputValue === '') {
    iziToast.error({
      message: 'Please enter a search inputValue!',
      position: 'topRight',
      timeout: 2000,
    });
    return;
  }
  showLoader();
  const data = getImagesByQuery(inputValue, page);
  // const totalPages = await countTotalPages(data);
  // console.log('total pages', totalPages);
  // if (page === totalPages) {
  //   hideLoadMoreButton();
  // }
  console.log('DATA', data);
  data
    .then(response => {
      console.log('response!!!', response);
      if (response.data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search inputValue. Please try again!',
          position: 'topRight',
          timeout: 2000,
        });
        return;
      }
      console.log('response_main', response);
      createGallery(response.data.hits);
      showLoadMoreButton();
    })
    .catch(() => {
      iziToast.error({
        message: 'Error fetching data from Pixabay',
        position: 'topCenter',
        timeout: 3000,
      });
    })
    .finally(() => {
      hideLoader();
    });
  form.reset();
  function loadMore() {
    page += 1;
    return page;
  }
  function loadMore() {
    page += 1;
    return page;
  }
});

// async function countTotalPages(data) {
//   console.log('countTotalPages', data);
//   const response = await data; // Ждем завершения промиса
//   const totalPages = Math.ceil(
//     response.data.totalHits / response.config.params.per_page
//   );
//   console.log('total pages from func', totalPages);

//   return totalPages; // Возвращаем результат
// }
