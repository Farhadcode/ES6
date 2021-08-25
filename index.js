//javasript //
// var num = 5;
// function sayName() {
//     var name = " farhad"
//     console.log(name);
// }
// sayName()
// let counter = 10;
// conunter = 5;












// ES6 ///

// const y = x => x * x;
// const x = y(5);
// console.log(x);


function min(nums) { return Math.min(nums) };

console.log(min([1, 3, 2]))

const { x, y, z } = { x: 1, y1: 2, z: 3 };

console.log(x, y, z);

const nums = [1, 2, 3, 4, 5];
let output = nums.filter(n => n % 2);
console.log(output);


//How will you find the first friend who has a name with 5 characters?

const friends = ["Moushumi", "Misha", "Manna", "mimi", "mahiya"];

//let name = friends.filter(friend => friend.length == 5);
let name = friends.find(friend => friend.length == 5);
console.log(name);

