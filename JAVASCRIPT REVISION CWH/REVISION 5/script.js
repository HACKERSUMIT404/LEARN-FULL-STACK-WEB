let rand = Math.random();
let first, second, third;

if (rand < 0.33) {
  //0 0.33 0.66 1
  first = "Water";
} else if (rand < 0.66 && rand >= 0.33) {
  first = "Earth";
} else {
  first = "Fire";
}

rand = Math.random();
if (rand < 0.33) {
  //0 0.33 0.66 1
  second = "Water";
} else if (rand < 0.66 && rand >= 0.33) {
  second = "Earth";
} else {
  second = "Fire";
}

rand = Math.random();
if (rand < 0.33) {
  //0 0.33 0.66 1
  third = "Water";
} else if (rand < 0.66 && rand >= 0.33) {
  third = "Earth";
} else {
  third = "Fire";
}

console.log(`First: ${first}, Second: ${second}, Third: ${third}`);
