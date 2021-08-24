// const myObject= {
//     name:'name',
//     age:38
//     city:'cumilla'
// }
// getElemensByTa


add = (a, b = 0) => a + b;

const result = add(6,);

console.log(result);

const sum = (num1, num2) => num1 + num2;
const value = sum(675, 7657);
console.log(value);

const value1 = (num1, num2, num3) => {
    const sum = num2 + num3;
    const dife = num1 - num3;
    const mul = sum * dife;
    return mul;
}

const result1 = value1(20, 15, 10);
console.log(result1);