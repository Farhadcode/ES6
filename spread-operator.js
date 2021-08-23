const numbers = [23, 33, 34, 55, 77, 99];

console.log(numbers);
console.log(...numbers);
numbers.push(119)
const maxValue = Math.max(...numbers);
console.log(maxValue);


const numbers2 = numbers;
numbers.push(58);
console.log(numbers2);

const newArray = [10, 12, ...numbers2, 585, 88, 345];
console.log(newArray);