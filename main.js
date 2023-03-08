let names = [
  "rita",
  "cole",
  "nate",
  "ethan",
  "adam",
  "maklin",
  "isaac",
  "kyan",
  "eddie",
];

let outputEl = document.getElementById("output");

for (let n = 0; n < names.length; n++) {
  outputEl.innerHTML += `<p>hello ${names[n]}!</P>`;
}
