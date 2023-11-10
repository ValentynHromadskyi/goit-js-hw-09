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

function onStart() {
  refs.start.disabled = true;
  timerId = setInterval(() => {
    const randomColor = getRandomHexColor();
    refs.body.setAttribute('style', `background: ${randomColor};`);
  }, 1000);
}

function onStop() {
  refs.start.disabled = false;
  clearInterval(timerId);
}
