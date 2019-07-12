import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import makeGridItem from './makeGridItem';

import './styles.css';

const masonryInstance = new Masonry('#gallery', {
  columnWidth: '.grid-sizer',
  itemSelector: '.grid-item',
  percentPosition: true,
  transitionDuration: '0.3s',
});

imagesLoaded('#gallery').on(
  'progress',
  masonryInstance.layout.bind(masonryInstance),
);

fetch(
  'https://pixabay.com/api/?key=4823621-792051e21e56534e6ae2e472f&q=dog&image_type=photo',
)
  .then(res => res.json())
  .then(({ hits }) => {
    // webformatURL
    const elements = hits.map(hit => makeGridItem(hit.webformatURL));

    // Добавить в DOM
    document.querySelector('#gallery').append(...elements);

    // Добавить к masonry под слежение
    masonryInstance.addItems(elements);

    imagesLoaded('#gallery').on(
      'progress',
      masonryInstance.layout.bind(masonryInstance),
    );
  });
