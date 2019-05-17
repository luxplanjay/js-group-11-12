const input = document.querySelector('.input-events-example > input');
const output = document.querySelector('.input-events-example > .output');

input.addEventListener('input', handleInputChange);

function handleInputChange(event) {
  output.textContent = event.currentTarget.value;
}
