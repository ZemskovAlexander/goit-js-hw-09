const inputData = document.querySelector('form');

inputData.addEventListener('submit', evt => {
  evt.preventDefault();
  const formData = new FormData(inputData);
  formData.forEach((value, name) => console.log(value, name));

  return new Promise((resolve, reject)
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    }));
});

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   } else {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   }
// }

// const promise = new Promise()
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });