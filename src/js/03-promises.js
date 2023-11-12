import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  button: document.querySelector('button[type="submit"]'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  body: document.querySelector('body'),
};
let timeId;
let timerButton;
let i = 0;
let amount = 0;
let step = 0;
refs.form.addEventListener('submit', onSubmit);
refs.button.disabled = false;

function onSubmit(event) {
  event.preventDefault();
  amount = refs.amount.value;
  step = Number(refs.step.value);
  let delay = Number(refs.delay.value);
  let position = 0;
  for (i; i < amount; i += 1) {
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
  timerButton = setTimeout(() => {
    refs.button.disabled = false;
  }, delay);
  position = 0;
  i = 0;
  refs.button.disabled = true;
  refs.form.reset();
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
