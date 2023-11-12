import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  button: document.querySelector('button[type="submit"]'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  body: document.querySelector('body'),
  input: document.querySelector('label'),
};

let position = 0;

refs.form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  let amount = refs.amount.value;
  const step = Number(refs.step.value);
  let delay = Number(refs.delay.value);

  for (let i = 0; i < amount; i += 1) {
    position += 1;

    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
          position: 'center-top',
        });
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
          position: 'center-top',
        });
      });
    delay += step;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    timeId = setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function style() {
  refs.body.style.backgroundColor = 'MediumSeaGreen';
  refs.form.style.cssText =
    'position: absolute;top: 50%; left: 50%;transform: translateX(-50%) translateY(-50%);color: black ;font-size: 20px;letter-spacing: 2px;display: flex; gap: 30px;';
 }
style();
