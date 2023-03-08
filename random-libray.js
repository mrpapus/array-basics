function randomDec(low, high) {
  return Math.random() * (high - low) + low;
}
//random integer
function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}

function randomRGB() {
  return `rgb(${randomInt(0, 256)}, ${randomInt(0, 256)}, ${randomInt(
    0,
    256
  )})`;
}
