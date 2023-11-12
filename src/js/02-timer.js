import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  input: document.querySelector('#datetime-picker'),
  start: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  timer: document.querySelector('.timer'),
  field: document.querySelectorAll('.field'),
  body: document.querySelector('body'),
};

refs.start.disabled = true;
let selectedDate;
let valueTimer;
let timerId;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    dateNow = Date.now();
    selectedDate = selectedDates[0].getTime();
    if (dateNow >= selectedDates[0].getTime()) {
      refs.start.disabled = true;
      Notify.failure('Please choose a date in the future', {
        position: 'center-top',
      });
    } else {
      refs.start.disabled = false;
      console.log(selectedDates[0]);
    }
  },
};

flatpickr('#datetime-picker', options);

refs.start.addEventListener('click', onStart);

function onStart() {
  clearInterval(timerId);
  dateNowStart = Date.now();
  refs.start.disabled = true;
  valueTimer = selectedDate - dateNowStart;

  function start() {
    const finalTime = convertMs(valueTimer);
    refs.seconds.textContent = finalTime.seconds;
    refs.minutes.textContent = finalTime.minutes;
    refs.hours.textContent = finalTime.hours;
    refs.days.textContent = finalTime.days;
    valueTimer -= 1000;
    if (valueTimer <= 0) {
      clearInterval(timerId);
    }
  }
  timerId = setInterval(start, 1000);
  Notify.success('Well done - starting the timer', {
    position: 'center-top',
  });
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
  return { days, hours, minutes, seconds };
}

function style() {
  refs.body.style.backgroundColor = 'MediumSeaGreen';
  refs.timer.style.cssText =
    'position: absolute;top: 50%; left: 50%;transform: translateX(-50%) translateY(-50%);color: black ;font-size: 50px;letter-spacing: 1px;display: flex; gap: 30px;';
  if (refs.field) {
    for (let i = 0; i < refs.field.length; i++) {
      refs.field[i].style.cssText =
        'display: flex;flex-direction : column;gap:15px; text-align: center;    font-family: cursive; text-transform: uppercase;';
    }
  }
}
style();
