const inputData = document.querySelector('button[submit]');

console.log(inputData);
inputData.addEventListener('submit', evt => {
  evt.preventDefault();
  const formData = new FormData(inputData);
  formData.forEach((value, name) => console.log(value, name));
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
