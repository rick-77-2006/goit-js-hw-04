function isEnoughCapacity(products, containerSize) {

// function checkStorage(available, ordered) {
  let message;

  // var available = 200;
  // var ordered = 50;
// if (ordered > available)
if (products > containerSize)
  /*if ((ordered == 130) || (available == 100) ||
    (ordered == 180) || (available == 150))*/
  {
  message = "Не достаточно местав в контейнере!";
}else{
  message = "Места в контейнере достаточно.";
}
  // Change code above this line
  return message;
}



console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)
); // false