function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

let timerId = null;
let isActive = false;

start.addEventListener('click', () => {
  if (this.isActive) {
    return;
  }

  this.isActive = true;

  timerId = setInterval(() => {
    console.log(`Interval with id ${timerId} has run!`);

    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stop.addEventListener('click', () => {
  clearInterval(timerId);
  console.log(`Interval with id ${timerId} has stopped!`);
});
