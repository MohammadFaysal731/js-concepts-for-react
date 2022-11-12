// falsly
// '', 0, false, null, undefined

// truthy
//
// 'almas', 5, ture, {},[]

// check truthy 
let myVar = 5;
// check any truthy
if (myVar) {
    myVar = 100;
}
else {
    myVar = 0;
}

let myMoney = 50;
// you check negative of falsy anything using that!
if (!myMoney) {

}
// ternary
const money = 800;
let food;
if (money > 100) {
    food = 'biryanin';
}
else {
    food = 'cha biscut';
}

let food1 = money > 100 ? 'biryanin' : 'cha biscut';
// console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
// console.log(drink);

// conversion number to string
const num1 = 52;
// console.log(num1);
const numStr = num1 + '';
// console.log(numStr);

// conversion string to number
const input = '560';
const inputNum = +input;
// console.log(inputNum);

// 
let isActive = true;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');
// isActive ? showUser() : hideUser();

// use && if the left side is true then rigth side will be excuted
isActive && showUser();

// use || if the left side is false then right side will be excuted
isActive || hideUser();

// toggle boolean
isActive = !isActive;


