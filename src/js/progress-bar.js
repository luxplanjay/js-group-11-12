const canvas = document.querySelector('#p-bar');
const ctx = canvas.getContext('2d');
const btnPrev = document.querySelector('button[data-action="prev"]');
const btnNext = document.querySelector('button[data-action="next"]');

let currentWidth = 0;
const step = canvas.width / 10;
ctx.fillStyle = '#2196F3';

const fill = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(0, 0, currentWidth, canvas.height);
};

btnPrev.addEventListener('click', () => {
  console.log('prev');

  currentWidth -= step;
  fill();
});

btnNext.addEventListener('click', () => {
  console.log('next');

  currentWidth += step;
  fill();
});
