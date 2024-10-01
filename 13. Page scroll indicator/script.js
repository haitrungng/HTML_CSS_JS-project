`use strict`;

let indicatorEle = document.querySelector(`.progress`);
console.log(indicatorEle);
// whole height of viewport
console.log(document.documentElement.clientHeight);
// whole height of page
console.log(document.documentElement.scrollHeight);
let scrollHeight =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
console.log(scrollHeight);

window.addEventListener(`scroll`, function () {
  // indicates how far down the page the user has scrolled.
  let scrollTop = this.document.documentElement.scrollTop;
  console.log(scrollTop);
  let scrolled = (scrollTop / scrollHeight) * 100;
  indicatorEle.style.width = `${scrolled}%`;
  //   console.log(`${scrolled}%`);
});
