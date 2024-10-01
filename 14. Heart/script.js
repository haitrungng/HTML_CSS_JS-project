const greyHeart = document.querySelector(`.grey--heart`);
const redHeart = document.querySelector(`.red-heart`);
console.log(greyHeart);
console.log(redHeart);

greyHeart.addEventListener(`click`, () => {
  greyHeart.classList.add(`fill-color`);
  redHeart.classList.add(`animation`);
});
redHeart.addEventListener(`click`, () => {
  redHeart.classList.remove(`animation`);
  redHeart.classList.remove(`fill-color`);
});
