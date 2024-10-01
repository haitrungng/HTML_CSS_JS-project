const btnEle = document.querySelector(`.btn`);
const hexCodeEle = document.querySelector(`.hexCode`);

function createRanNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
btnEle.addEventListener(`click`, function () {
  const arr = `0123456789ABCDEF`;
  let color = `#`;
  for (let i = 0; i < 6; i++) color += arr[createRanNum(0, arr.length - 1)];
  hexCodeEle.textContent = color;
  document.body.style.backgroundColor = color;
});
