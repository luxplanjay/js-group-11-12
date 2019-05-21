const nav = document.querySelector('.js-nav');

nav.addEventListener('click', handleClick);

function handleClick(e) {
  e.preventDefault();
  // console.log(e.target);
  // console.log(e.currentTarget);

  if (e.target === e.currentTarget) {
    return;
  }

  const currentLink = e.target;
  const activeLink = e.currentTarget.querySelector('.nav__link--active');

  if (activeLink) {
    activeLink.classList.remove('nav__link--active');
  }

  currentLink.classList.add('nav__link--active');
}
