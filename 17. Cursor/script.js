const cursorEle = document.querySelector(`.cursor`);

function moveCursor(pageX, pageY) {
  cursorEle.style.left = pageX + `px`;
  cursorEle.style.top = pageY + `px`;
}

document.addEventListener(`mouseover`, function (e) {
  moveCursor(e.pageX, e.pageY);
});
