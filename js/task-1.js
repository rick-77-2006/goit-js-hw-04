function isEnoughCapacity(products, containerSize) {
  const quantities = Object.values(products);
  let totalQuantity = 0;
  for (let quantity of quantities) {
    totalQuantity += quantity;
    if (totalQuantity > containerSize) {
      return false;
    }
  }
  return true;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)); // false

// const globalValue = 10;

// function foo() {
//   const a = 20;
//   console.log(a);
//   console.log(globalValue);

//   for (let i = 0; i < 5; i+= 1) {
//     console.log(a);
//     console.log(globalValue);

//     if (i === 2) {
//       console.log(a);
//       console.log(globalValue);
//     }
//   }
// }