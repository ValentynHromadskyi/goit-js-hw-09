function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
  body: document.body,
};

refs.start.addEventListener('click', onStart);
refs.stop.addEventListener('click', onStop);

let timerId = 0;

function onStart() {
  refs.start.disabled = true;
  refs.stop.disabled = false;
  timerId = setInterval(() => {
    const randomColor = getRandomHexColor();
    refs.body.setAttribute('style', `background: ${randomColor};`);
  }, 1000);
}

function onStop() {
  refs.start.disabled = false;
  refs.stop.disabled = true;
  clearInterval(timerId);
}

