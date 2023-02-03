import Notiflix from 'notiflix';

const formRef = document.querySelector('form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const delay = Number(this.delay.value);
  const step = Number(this.step.value);
  const amount = Number(this.amount.value);
  let position = 0;
  let differenceStep = delay - step;

  const promiseId = setInterval(() => {
    position += 1;
    differenceStep += step;

    createPromise(position, differenceStep).then(onResolve).catch(onReject);

    if (amount === position) clearInterval(promiseId);
  }, step);
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }, delay);
  });
}

function onResolve(value) {
  Notiflix.Notify.success(value);
}

function onReject(error) {
  Notiflix.Notify.failure(error);
}
