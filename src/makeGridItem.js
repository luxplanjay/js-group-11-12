const makeGridItem = imgUrl => {
  const div = document.createElement('div');
  div.classList.add('grid-item');

  const img = document.createElement('img');
  img.src = imgUrl;

  div.appendChild(img);

  return div;
};

export default makeGridItem;
