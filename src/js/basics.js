const loginButton = document.querySelector('button[data-action="login"]');

document.body.addEventListener('click', handleClick);
loginButton.addEventListener('click', handleClick);

function handleClick(event) {
  console.log('target: ', event.target);
  console.log('currentTarget: ', event.currentTarget);
}
