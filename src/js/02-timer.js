import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

let refs = {
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  field: document.querySelectorAll('.field'),
  timer: document.querySelector('.timer'),
};

let selectedEndTime;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates, dateStr, instance) {
    if (instance.now > selectedDates[0]) {
      Notify.failure('Please choose a date in the future');
    } else {
      refs.startBtn.removeAttribute('disabled');
      selectedEndTime = selectedDates[0];
      return selectedEndTime;
    }
  },
};

changeVisualStyle();
flatpickr('#datetime-picker', options);

refs.startBtn.setAttribute('disabled', 'true');
refs.startBtn.addEventListener('click', onStartTimer);

function onStartTimer() {
  refs.input.setAttribute('disabled', 'true');
  refs.startBtn.setAttribute('disabled', 'true');
  const intervalId = setInterval(() => {
    const currentTime = Date.now();
    let differenceTime = selectedEndTime - currentTime;
    if (differenceTime <= 0) {
      clearInterval(intervalId);
      Notify.success('Time up!');
      refs.timer.style.color = 'green';
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(differenceTime);

    refs.days.textContent = pad(days);
    refs.hours.textContent = pad(hours);
    refs.minutes.textContent = pad(minutes);
    refs.seconds.textContent = pad(seconds);
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function changeVisualStyle() {
  refs.timer.style.display = 'flex';
  refs.timer.style.gap = '10px';
  refs.timer.style.padding = '8px';
  refs.timer.style.fontWeight = 'bold';
  refs.timer.style.textTransform = 'uppercase';
  for (let item of refs.field) {
    item.style.display = 'flex';
    item.style.flexDirection = 'column';
    item.style.alignItems = 'center';
    item.firstElementChild.style.fontSize = '24px';
    item.lastElementChild.style.fontSize = '13px';
  }
}
