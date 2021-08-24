const numbers = [34, 9, 7, 56, 89, 33, 24];
const bigNumbers = numbers.filter(num => num < 70);
console.log(bigNumbers);

const products = [
    { name: 'water bottle', price: 140, color: 'yellow' },
    { name: 'mobile phone', price: 18000, color: 'black' },
    { name: 'smart watch', price: 5000, color: 'black' },
    { name: 'water mage', price: 30, color: 'pink' },
    { name: 'tesho', price: 50, color: 'white' },
]

const expensive = products.filter(pd => pd.price > 100);
console.log(expensive);

const blacks = products.filter(pd => pd.color == 'black');
console.log(blacks);