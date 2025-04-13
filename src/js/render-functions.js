//У файлі render-functions.js створи екземпляр SimpleLightbox для роботи з модальним вікном та зберігай функції для відображення елементів інтерфейсу:

//createGallery(images). Ця функція повинна приймати масив images, створювати HTML-розмітку для галереї, додавати її в контейнер галереї та викликати метод екземпляра SimpleLightbox refresh(). Нічого не повертає.
// clearGallery(). Ця функція нічого не приймає та повинна очищати вміст контейнера галереї. Нічого не повертає.
// showLoader(). Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. Нічого не повертає.
// hideLoader(). Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера. Нічого не повертає.
// showLoadMoreButton(). Ця функція нічого не приймає, повинна додавати клас для відображення кнопки Load more. Нічого не повертає.
// hideLoadMoreButton(). Ця функція нічого не приймає, повинна прибирати клас для відображення кнопки Load more. Нічого не повертає.
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// import { loader } from '../main';
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMore = document.querySelector('.load-more');
export async function createGallery(imagesPromise) {
  try {
    const items = await imagesPromise; // Ожидаем выполнения промиса
    console.log('createGallery', items);
    console.log('items', items.hits); // Логируем массив hits
    const markup = items.hits // Извлекаем массив hits из ответа
      .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return `<li class="gallery-item">
                  <a href="${largeImageURL}">
                    <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
                    <div class='item-footer'>
                      <p><b>likes</b> ${likes}</p>
                      <p><b>views</b> ${views}</p>
                      <p><b>comments</b> ${comments}</p>
                      <p><b>downloads</b> ${downloads}</p>
                    </div>
                  </a>
                </li>`;
      })
      .join('');

    gallery.innerHTML = markup; // Добавляем разметку в контейнер галереи
    if (items.page === items.totalPages) {
      hideLoadMoreButton(); // Скрываем кнопку "Load more", если достигли последней страницы
    }
    lightbox.refresh(); // Обновляем SimpleLightbox
  } catch (error) {
    console.error('Error creating gallery:', error); // Логируем ошибку, если что-то пошло не так
  }
}
export function clearGallery() {
  gallery.innerHTML = '';
  
}


export function showLoader() {
  loader.classList.remove('hidden-loader');
  
}

export function hideLoader() {
  loader.classList.add('hidden-loader');
}
export function showLoadMoreButton() {
    loadMore.classList.remove('load-more-hidden');
}
export function hideLoadMoreButton() {
    loadMore.classList.add('load-more-hidden');
}
const lightbox = new SimpleLightbox('.gallery a', {});