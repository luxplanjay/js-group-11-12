import newsService from './services/news-service';
import spinner from './spinner';
import articleListItemsTemplate from '../templates/aticle-list-items.hbs';

const refs = {
  searchForm: document.querySelector('#search-form'),
  articleList: document.querySelector('#article-list'),
  loadMoreBtn: document.querySelector('button[data-action="load-more"]'),
};

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
refs.loadMoreBtn.addEventListener('click', loadMoreBtnHandler);

function searchFormSubmitHandler(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const input = form.elements.query;

  clearListItems();

  newsService.resetPage();
  newsService.searchQuery = input.value;
  fetchArticles();

  input.value = '';
}

function loadMoreBtnHandler() {
  fetchArticles();
}

function fetchArticles() {
  spinner.show();

  newsService
    .fetchArticles()
    .then(articles => {
      spinner.hide();
      isertListItems(articles);
    })
    .catch(error => {
      console.warn(error);
    });
}

function isertListItems(items) {
  const markup = articleListItemsTemplate(items);

  refs.articleList.insertAdjacentHTML('beforeend', markup);
}

function clearListItems() {
  refs.articleList.innerHTML = '';
}
