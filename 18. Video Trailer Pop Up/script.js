const trailerEle = document.querySelector(`.trailer-container`);
const btnEle = document.querySelector(`.btn`);
const closeBtnEle = document.querySelector(`.close-icon`);
const video = document.querySelector(`video`);

btnEle.addEventListener(`click`, function () {
  trailerEle.classList.remove(`active`);
  btnEle.style.animation = `none`;
});

closeBtnEle.addEventListener(`click`, turnOffVid);
document.addEventListener(`keydown`, function (e) {
  if (e.key === `Escape` && !trailerEle.classList.contains(`active`))
    turnOffVid();
});

function turnOffVid() {
  trailerEle.classList.add(`active`);
  video.pause();
  video.currentTime = 0;
  btnEle.style.animation = `bounce 1s ease-in-out`;
  //   animation-iteration-count: infinite;
  btnEle.style.animationIterationCount = `infinite`;
}
