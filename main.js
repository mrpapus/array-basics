function randomDec(low, high) {
  return Math.random() * (high - low) + low;
}

function randomInt(low, high) {
  return Math.floor(randomDec(low, high));
}

// let happyArray = [];
// for (let n = 50; n <= 200; n += 20) {
//   happyArray.push(n);
// }

let myStr = "ford,chev,kia,toyota,honda";
let myArray = myStr.split(",");
console.log(myArray);
