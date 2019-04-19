const Counter = function({ initialValue = 0, step = 1 }) {
  // this = {}
  // this.__proto__ = Counter.prototype;

  this.value = initialValue;
  this.step = step;

  // return this;
};

Counter.prototype.increment = function() {
  this.value += this.step;
};

Counter.prototype.decrement = function() {
  this.value -= this.step;
};

const counter = new Counter({ initialValue: 10, step: 5 });

const counterValueField = document.querySelector('.js-counter-value');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

const udateCounterValueField = () => {
  counterValueField.textContent = counter.value;
};

udateCounterValueField();

incrementBtn.addEventListener('click', () => {
  counter.increment();
  // console.log('clicked increment!');
  // console.log('counter.value: ', counter.value);
  udateCounterValueField();
});

decrementBtn.addEventListener('click', () => {
  counter.decrement();
  udateCounterValueField();
});

console.dir(counterValueField);
console.dir(incrementBtn);
console.dir(decrementBtn);
