
// normal time
/*
const numbers = [9, 19, 787, 99, 66, 78];
const output = [];

const fiveTimes = number => number * 5;
for (const number of numbers) {
    const result = fiveTimes(number);
    output.push(result);
}
console.log(output);


//array map applay

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

const fiveTimes = number => number * 5;
const output1 = numbers.map(fiveTimes);

const output1 = numbers.map(x => x * 5);
console.log(output1);
*/

const friends = ["kamal", 'jamal sir', 'tome cruse', 'dunal trem'];
const fLengths = friends.map(fri => fri.length);
console.log(fLengths);

const products = [
    { name: 'water bottle', price: 140, color: 'yellow' },
    { name: 'mobile phone', price: 18000, color: 'gray' },
    { name: 'smart watch', price: 5000, color: 'black' },
    { name: 'water mage', price: 30, color: 'pink' },
    { name: 'tesho', price: 50, color: 'white' },
]
products.map(pd => console.log(pd));
const productNames = products.map(pd => pd.name);
console.log(productNames);
const productPrice = products.map(product => product.price);
console.log(productPrice);



