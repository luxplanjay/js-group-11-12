const openModalBtn = document.querySelector('button[data-action="open-modal"]');
const closeModalBtn = document.querySelector(
  'button[data-action="close-modal"]'
);
const backdrop = document.querySelector('.js-backdrop');

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', handleBackdropClick);

function openModal() {
  document.body.classList.add('show-modal');
  window.addEventListener('keydown', handleKeyPress);
}

function closeModal() {
  document.body.classList.remove('show-modal');
  window.removeEventListener('keydown', handleKeyPress);
}

function handleBackdropClick(event) {
  console.log('target: ', event.target);
  console.log('current: ', event.currentTarget);

  if (event.target !== event.currentTarget) {
    return;
  }

  closeModal();
}

function handleKeyPress(event) {
  if (event.code !== 'Escape') {
    return;
  }

  closeModal();
}
