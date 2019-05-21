const tagList = document.querySelector('.js-tags');

tagList.addEventListener('click', handleClick);

function handleClick(e) {
  if (e.target === e.currentTarget) {
    return;
  }

  const el = e.target;
  el.classList.toggle('tags__item--active');
}
