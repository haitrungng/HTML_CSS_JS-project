const typedTextEle = document.querySelector(`.typed-text`);
const cursorEle = document.querySelector(`.cursor`);

const words = [`Awesome`, `Fun`, `Cool`, `Life`, `Famous`, `Weird`];

const typingDelay = 200;
const erasingDelay = 200;

const newLetterDelay = 2000;
let index = 0;
let charIdx = 0;

document.addEventListener(`DOMContentLoaded`, () => {
  if (words.length) {
    setTimeout(type, newLetterDelay);
    setInterval(function () {
      cursorEle.classList.toggle(`hidden`);
    }, 800);
  }
});

function type() {
  if (charIdx < words[index].length) {
    typedTextEle.textContent += words[index][charIdx++];
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, erasingDelay);
  }
}
function erase() {
  if (charIdx > 0) {
    typedTextEle.textContent = typedTextEle.textContent.slice(0, charIdx - 1);
    charIdx--;
    setTimeout(erase, erasingDelay);
  } else {
    index++;
    if (index >= words.length) index = 0;

    setTimeout(type, newLetterDelay);
  }
}
