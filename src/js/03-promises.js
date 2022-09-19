import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  inputForm: document.querySelector('.form'),
  firstDelay: document.querySelector('input[name="delay"]'),
  delayStep: document.querySelector('input[name="step"]'),
  amountValue: document.querySelector('input[name="amount"]'),
  createPromiseBtn: document.querySelector('.form button'),
};

refs.inputForm.addEventListener('submit', onStartPromises);
let step;
let delay;

function onStartPromises(e) {
  e.preventDefault();
  let amount = Number(refs.amountValue.value);
  step = Number(refs.delayStep.value);
  delay = Number(refs.firstDelay.value);

  if (amount < 0 || step < 0 || delay < 0) {
    Notify.failure('Enter positive values');
    return;
  }

  for (let i = 1; i <= amount; i += 1) {
    let position = i;

    createPromise(position, delay)
      .then(({ position, delay }) =>
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
      )
      .catch(({ position, delay }) =>
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
      );

    delay += step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
