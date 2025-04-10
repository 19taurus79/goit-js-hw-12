//У файлі pixabay-api.js зберігай функції для виконання HTTP-запитів:

// getImagesByQuery(query, page). Ця функція повинна приймати два параметри query (пошукове слово, яке є рядком) та page (номер сторінки, яка є числом), здійснювати HTTP-запит і повертати значення властивості data з отриманої відповіді.
import axios from 'axios';
const PIXABAY_API_KEY = '49602919-aeba24ff5374aa13ccf20c3b1';
const PIXABAY_API_URL = 'https://pixabay.com/api/';
const PIXABAY_PARAMS = {
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 15,
};

export async function getImagesByQuery(query, page = 1) {
  try {
    const response = await axios.get(`${PIXABAY_API_URL}`, {
      params: {
        key: PIXABAY_API_KEY,
        q: query,
        image_type: PIXABAY_PARAMS.image_type,
        orientation: PIXABAY_PARAMS.orientation,
        safesearch: PIXABAY_PARAMS.safesearch,
        page: page,
        per_page: PIXABAY_PARAMS.per_page,
      },
    });

    // if (response.data.hits.length === 0) {
    //   iziToast.error({
    //     message: 'Sorry, there are no images matching your search query. Please try again!',
    //     position: 'topCenter',
    //     timeout: 3000,
    //   });
    // }
    console.log(response);
    console.log(response.data.totalHits);
    console.log(response.config.params.page);
    console.log(response.config.params.per_page);
    console.log(countTotalPages(response));
    return response.data;
  } catch (error) {
    console.error('Error fetching data from Pixabay:', error);
  } finally {
    // hideLoader();
  }
}

function countTotalPages(data) {
  const totalPages = Math.ceil(
    data.data.totalHits / data.config.params.per_page
  );
  return totalPages;
}
