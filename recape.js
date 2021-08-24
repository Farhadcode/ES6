// 1 let and const
const baby = 'mukta';
let phone = 'realme';
phone = 'appo';

// 2 templat string

const myNotes = ` I love you ${baby}. I miss you ${baby}.`
console.log(myNotes);

// array max and useing spread operator
// let
// function arrayMax() {

//     return maxValue;
// };
const num = [90, 89, 525, 858, 69];
const maxValue = Math.max(...num);
//const result = arrayMax();
console.log(maxValue);

// arrow function

const duble = x => x * x;
console.log(duble(5));