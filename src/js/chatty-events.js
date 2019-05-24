window.addEventListener('scroll', _.throttle(onScroll, 300));

function onScroll() {
  console.log('💩');
}

document
  .querySelector('.input')
  .addEventListener('input', _.debounce(onInput, 300));

function onInput() {
  console.log('input event! ' + Date.now());
}
