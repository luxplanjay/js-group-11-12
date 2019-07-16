import InfiniteScroll from 'infinite-scroll';
import postTemplate from './templates/post.hbs';
import './styles.css';

const feedContainer = document.querySelector('#feed');

const infScrollInstance = new InfiniteScroll(feedContainer, {
  responseType: 'text',
  history: false,
  path() {
    return `https://jsonplaceholder.typicode.com/posts?_page=${this.pageIndex}`;
  },
});

infScrollInstance.on('load', (response, url) => {
  // console.log(response);
  const posts = JSON.parse(response);

  console.group(url);
  console.log(posts);
  console.log('pageIndex: ', infScrollInstance.pageIndex);
  console.groupEnd(url);

  const markup = posts.map(post => postTemplate(post)).join('');

  const proxyEl = document.createElement('div');
  proxyEl.innerHTML = markup;

  const parsedItems = proxyEl.querySelectorAll('.item');

  console.log(proxyEl);
  console.log(parsedItems);

  infScrollInstance.appendItems(parsedItems);
});

infScrollInstance.loadNextPage();

// Сабмит формы с новым параметром запроса для картинок
// document.querySelector('#search').addEventListener('submit', e => {
//   e.preventDefault();

//   const query = 'dog';
// container.innnerHTML = '';
//   infScrollInstance.pageIndex = 1;
//   infScrollInstance.option({
//     path() {
//       return `https://my-picture-api.com/?q=${query}&page=${
//         this.pageIndex
//       }`;
//     },
//   });

//   infScrollInstance.loadNextPage();
// });
