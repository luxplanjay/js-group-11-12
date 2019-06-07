import posts from '../posts.json';
import postFeedItemTemplate from '../templates/post-feed-item.hbs';
import postFeedTemplate from '../templates/post-feed.hbs';
import '../css/post-feed.css';

// console.log(postFeedItemTemplate);
// console.log(posts);

const refs = {
  postFeed: document.querySelector('.post-feed'),
};

// Создаем всю разметку из шаблона списка
// const markup = postFeedTemplate(posts);
// console.log(markup);
// refs.postFeed.insertAdjacentHTML('beforeend', markup);

// Создаем всю разметку из шаблона элемента списка
buildPostFeed(posts);

function buildPostFeed(posts) {
  const markup = posts.map(post => postFeedItemTemplate(post)).join('');
  refs.postFeed.insertAdjacentHTML('beforeend', markup);
}
