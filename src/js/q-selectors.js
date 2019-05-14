const magicButton = document.querySelector('button[data-action="magic"]');
const image = document.querySelector('.unsplash-image');
const menuItems = document.querySelectorAll('.menu-item');
const homeMenuItem = document.querySelector('.menu-item');

magicButton.addEventListener('click', () => {
  console.log(magicButton.dataset.action);

  updateImage();
  toggleActiveItem();
});

function updateImage() {
  // image.alt = 'cool image';
  // image.src =
  //   'https://images.unsplash.com/photo-1557820178-20186da06935?ixlib=rb-1.2.1&auto=format&fit=crop&w=927&q=80';

  console.log(image.getAttribute('src'));
  image.setAttribute('alt', 'cool image');
  image.setAttribute(
    'src',
    'https://images.unsplash.com/photo-1557820178-20186da06935?ixlib=rb-1.2.1&auto=format&fit=crop&w=927&q=80'
  );
}

function setActiveItem() {
  homeMenuItem.classList.add('active');
}

function toggleActiveItem() {
  homeMenuItem.classList.toggle('active');
}
