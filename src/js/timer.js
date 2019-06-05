export default class Timer {
  constructor({ element, intialValue = 0, step = 1 }) {
    this.value = intialValue;
    this.step = step;
    this.refs = {
      decBtn: element.querySelector('button[data-action="decrement"]'),
      incBtn: element.querySelector('button[data-action="increment"]'),
      clockface: element.querySelector('div.value'),
    };

    this.udpateClockface();
    this.bindEvents();
  }

  increment() {
    this.value += this.step;
    this.udpateClockface();
  }

  decrement() {
    this.value -= this.step;
    this.udpateClockface();
  }

  udpateClockface() {
    this.refs.clockface.textContent = this.value;
  }

  bindEvents() {
    this.refs.decBtn.addEventListener('click', this.decrement.bind(this));
    this.refs.incBtn.addEventListener('click', this.increment.bind(this));
  }
}
