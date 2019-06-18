const refs = {
  startBtn: document.querySelector('button[data-action="start-timer"'),
  stopBtn: document.querySelector('button[data-action="stop-timer"'),
  clockface: document.querySelector('.js-clockface'),
};

const timer = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    const startTime = Date.now();

    this.timerId = setInterval(() => {
      const currentTime = Date.now();
      this.deltaTime = currentTime - startTime;

      updateClockface(this.deltaTime);
    }, 1000);
  },
  stop() {
    clearInterval(this.timerId);
    this.isActive = false;
    this.deltaTime = 0;
    updateClockface(this.deltaTime);
  },
};

refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

function updateClockface(time) {
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  refs.clockface.textContent = `${hours}:${mins}:${secs}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}
