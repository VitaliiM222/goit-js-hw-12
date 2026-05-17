import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

import './css/styles.css';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');

let currentPage = 1;
let currentQuery = '';
let totalHits = 0;

const PER_PAGE = 15;

form.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

async function onSearch(event) {
  event.preventDefault();

  currentQuery = event.target.elements['search-text'].value.trim();

  if (!currentQuery) {
    return;
  }

  currentPage = 1;

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);

    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });

      return;
    }

    createGallery(data.hits);

    const totalPages = Math.ceil(totalHits / PER_PAGE);

    if (totalPages > 1) {
      showLoadMoreButton();
    } else {
      iziToast.info({
        message:
          "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong!',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}

async function onLoadMore() {
  currentPage += 1;

  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);

    createGallery(data.hits);

    const totalPages = Math.ceil(totalHits / PER_PAGE);

    if (currentPage >= totalPages) {
      iziToast.info({
        message:
          "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    } else {
      showLoadMoreButton();
    }

    smoothScroll();
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong!',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}

function smoothScroll() {
  const card = document.querySelector('.gallery-item');

  if (!card) {
    return;
  }

  const cardHeight = card.getBoundingClientRect().height;

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}