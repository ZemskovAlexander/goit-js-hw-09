import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const selectedDates = document.querySelector('input[type="text"]');

const promotion = new Date(selectedDates);
console.log(promotion);

let p = document.querySelector('span');


let timerId = setInterval(() => {
  let dateNow = Date.now(); // tomestamp
  let distance = promotion - dateNow;

  let days = Math.floor(distance / 1000 / 60 / 60 / 24);

  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  p.innerHTML = `Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`;

  if (distance < 0) {
    clearInterval(timerId);
    p.innerHTML = 'Акция закончилась';
  }
}, 1000);




// const refs = {
//   startBtn: document.querySelector('button[data-start]'),

//   selectedTime: document.querySelector('#datetime-picker'),
//   selectedDates: document.querySelector('input[type="text"]'),

//   days: document.querySelector('[data-days]'),
//   hours: document.querySelector('[data-hours]'),
//   minutes: document.querySelector('[data-minutes]'),
//   seconds: document.querySelector('[data-seconds]'),
// };

//     p.innerHTML = `Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`;


// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// refs.startBtn.addEventListener('click', () => {
//   timer.start();
// });

// const timer = {
//   intervalId: null,
//   isActive: false,
//   start() {
//     if (this.isActive) {
//       return;
//     }

//     const startTime = Date.now();
//     this.isActive = true;

//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = refs.selectedDates - startTime; // Проблемс в формуле
//       const time = convertMs(deltaTime);

//       updateClockFace(time);

//       // console.log(`${days}:${hours}:${minutes}:${seconds}`);
//     }, 1000);
//   },
// };

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
flatpickr('input[type="text"]', options);

//                  Референс

// document.addEventListener('DOMContentLoaded', function () {
//   // конечная дата, например 1 июля 2021
//   const deadline = new Date(2022, 11, 09);
//   // id таймера
//   let timerId = null;
//   // склонение числительных
//   function declensionNum(num, words) {
//     return words[
//       num % 100 > 4 && num % 100 < 20
//         ? 2
//         : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
//     ];
//   }
// вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
//   function countdownTimer() {
//     const diff = deadline - Date.now();
//     if (diff <= 0) {
//       clearInterval(timerId);
//     }
//     const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
//     const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
//     const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
//     const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
//     $days.textContent = days < 10 ? '0' + days : days;
//     $hours.textContent = hours < 10 ? '0' + hours : hours;
//     $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
//     $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
//     $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
//     $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
//     $minutes.dataset.title = declensionNum(minutes, [
//       'минута',
//       'минуты',
//       'минут',
//     ]);
//     $seconds.dataset.title = declensionNum(seconds, [
//       'секунда',
//       'секунды',
//       'секунд',
//     ]);
//   }
//   // получаем элементы, содержащие компоненты даты
//   const $days = document.querySelector('[data-days]');
//   const $hours = document.querySelector('[data-hours]');
//   const $minutes = document.querySelector('[data-minutes]');
//   const $seconds = document.querySelector('[data-seconds]');
//   // вызываем функцию countdownTimer
//   countdownTimer();
//   // вызываем функцию countdownTimer каждую секунду
//   timerId = setInterval(countdownTimer, 1000);
// });
