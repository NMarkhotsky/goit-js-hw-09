const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};
let setIntervalId = null;

refs.startBtn.addEventListener('click', startChangeColorBody);
refs.stopBtn.addEventListener('click', stopChangeColorBody);

function startChangeColorBody() {
  disabledBtn(true, false);
  document.body.style.backgroundColor = getRandomHexColor();

  setIntervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopChangeColorBody() {
  disabledBtn(false, true);
  clearInterval(setIntervalId);
}

function disabledBtn(on, off) {
  refs.startBtn.disabled = on;
  refs.stopBtn.disabled = off;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
