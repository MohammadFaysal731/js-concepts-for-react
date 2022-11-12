//            ********** JavaScript  Fundamentals************

//******* (1). variable (let, const) three types variable ? *******.

/* let myNumber = 77;
myNumber = 88;
console.log(myNumber);

const fatherName = 'Jamal';
console.log(fatherName);

const isFatherName = true;
console.log(isFatherName); */

// ******  (2).a condition(<, >,===, !==, <=,>=) && ||,if else-if else ? *****.

/* const iphone = 50000;
const myBuject = 8000;

if (myBuject < iphone) {
    console.log('myBuject small');
}
else if (myBuject > iphone) {
    console.log('ami myBuject boro jodi amke ek ta 0 dao ok')
}

const one = 55;
const tow = 55;
if (one === tow) {
    console.log('yes is equal');
}
else {
    console.log('no is not equal');
}

const myName = 'faysal';
const house = true;
if (myName !== house) {
    console.log('soman na');
}
else {
    console.log('soman ');
}

const three = 66;
const four = 77;
if (three <= four) {
    console.log('three is soto');
}
else {
    console.log('four is soto');
}

const five = 100;
const six = 99;
if (five >= six) {
    console.log('hmm five is big than six');
}
else {
    console.log('no six is big');
}

const job = false;
const mone = 300000;
const flat = true;
if ((job && mone) || flat) {
    console.log('chlo biya kori')
}
else {
    console.log('kopa la to biya nai')
} */


// ***** (3). array:declare,lenght, index,push, pop,indexOf includes ? *****.

/*
const numbers = [55, 6, 77, 88, 99, 100, 5];
// check array length
const arrayLengt = numbers.length;
console.log(arrayLengt);
// change three position index item in array
numbers[3] = 66;
console.log(numbers);
// check element in array
const check = numbers.indexOf(4);
console.log(check);
// check the element position
const position = numbers[4];
console.log(position);
// add new item in back side number in array
numbers.push(200);
numbers.push(300);
console.log(numbers);
// remove a item in back side number in array by last
numbers.pop();
console.log(numbers);
// add new item in front side number in array
numbers.unshift(500);
numbers.unshift(600);
console.log(numbers);
// remove a item in front side numbers in array
numbers.shift();
console.log(numbers);
 */



//******* (4). for loop, while ? ******.

/*
let i = 0;
while (i < 10) {
    i++;
    console.log(i);
}
for (let i = 0; i < 10; i++) {
    console.log(i);
} */

// ****** (5). function return parameter ? *****.
/*
function add(num1, num2) {
    const total = num1 + num2;
    return total;
}
const result = add(9, 6); */

// ****** (6). Object property, including value like array, object ? ******.

/* const company = {
    name: 'Faysla & Sumaya',
    id: 599,
    ownerOne: {
        name: 'Faysal',
        salary: 20000,
        fullStackDev: true,
        langues: ['html', 'css', 'js', 'php', 'ph']
    },
    ownerTow: {
        name: 'Sumaya',
        salary: 15000,
        fullStackDev: true,
        langues: ['html', 'css', 'js']
    },

};
// asses ownerOne salary
const ownerOneSalary = company.ownerOne.salary;
console.log(ownerOneSalary);
// check thrid index property.
const ownerOneLangues = company.ownerOne.langues[3];
console.log(ownerOneLangues); */


// ********** ES6 *********

// ******(1).template string${}?***** .

/* const name = 'Faysal';
const address = 'Post Office';
const id = 66;

const template = `Hello, ${name} apne ki ${address} thaken.`
console.log(template); */

// *******(2).spread (...)? *******.


// ****** (2) a. copy an array then add new element to an array?.*****
/*
const numbers = [33, 444, 55, 666, 777, 8];
// console.log(numbers);
const newNumber = [99, ...numbers, 100]; */
// console.log(newNumber);

//****************************************/ (2) b. use filter to remove an element from an array then sum all?.****************************************

// use filter
/* const number = [3, 4, 5, 6, 7, 8, 9];
const remove666 = numbers.filter(number => number.includes(666));
console.log(remove666); */

// (2)b. use filter to remove an element from an array ?.
/*
const products = [
    { id: 1, name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { id: 2, name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { id: 3, name: 'wacth', price: 3000, brand: 'casio', color: 'yellow' },
    { id: 4, name: 'sunglass', price: 300, brand: 'ribon', color: 'black' },
    { id: 5, name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];
const badYellow = products.filter(product => product.color.includes('yellow'));
// console.log(badYellow);
 */


// ***********(3).Arrow functon()?*************.

/* // ***** (3).a no parameter()? *****.
const getNine = () => 9;
console.log(getNine());
// ***** (3).b single parameter() then multiply 12 ? *****.
const getMultiplt = number => number * 12;
console.log(getMultiplt(12));
// ***** (3).c tow parameters() first sum them and dividet by 4 ? *****.
const getdividet = (num1, num2) => (num1 + num2) / 4;
console.log(getdividet(4, 4));

// ***** (3).d multi line tow parameter() then sum by 5 then multiply them ? *****.
const sumAndmultiply = (one, tow) => {
    let num1 = one + 5;
    let sum1 = num1;
    let num2 = tow + 5;
    let sum2 = num2;
    const result = sum1 * sum2;
    return result;
};
const total = sumAndmultiply(2, 2);
console.log(total); */

// *****(4).destructuring ? *****.

// ***** (4).object destructuring array destructuring ? *****.

// Object destructuring

/*
const student = { name: 'Faysla', id: 14, height: '6ft', weight: 80 };
const { width, id, name } = student;
console.log(name, id, width); */

// Array destructuring

/* const numbers = [33, 44, 55, 66, 77, 88];
const [one, tow] = numbers;
// console.log(one, tow);
const [, balanc] = numbers;
// console.log(balanc);

*/


// ******* (5). object declartion shorthand ? *******.

// object shorthand
/* const x = 50;
const y = 100;
const obj = {
    x: x,
    y: y
};
// console.log(obj);
// shortchut
const obj1 = { x, y }
// console.log(obj1);

const name = 'Solimullan';
const area = 'Dhaka';

const nobab = {
    name: name,
    area: area
}
// console.log(nobab);

// shortchut
const nobab2 = { name, area };
console.log(nobab2);  */




// ****** 6.funtion parameter default value?. ******

/* const add = (one, tow = 7) => {
    const result = one + tow;
    return result;
}
const total = add(3);
console.log(total); */

// ******* 7.optional chaining (?.) ******

/* const company = {
    name: 'Web Dev',
    employ: 23,
    balance: 100000,
    fullStackDeveloper: true,
    langues: ['html', 'css', 'js']
};
const langues = company?.langues[2];
// const langues = company?.balance?.langues[2];
// console.log(langues); */

// ******************** Browser API *******************

// 1.local storage session storage
// 2.location API

// 3.history API

// 4.fetch
/* const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => console.log(data))
}
loadCountries(); */

/* *****************************
            Other
******************************** */

// 1.array: map, forEach, filter, find ?.

/*
// map

const numbers = [22, 33, 44, 55, 66, 77, 88];
const map = numbers.map(number => number * 2);
// console.log(map);
numbers.forEach(numbers => {
    console.log(numbers * 2);

});
// filter
const filter = numbers.filter(number => number > 50);
// console.log(filter);
const find = numbers.find(number => number > 20);
// console.log(find);

*/

/*
const products = [
    { name: 'oppo', pirce: 35000, id: 'Nont 7', color: 'black', storage: 64, camera: 48 },
    { name: 'samsung', pirce: 25000, id: 'Nont 8', color: 'orange', storage: 32, camera: 8 },
    { name: 'wolton', pirce: 20000, id: 'Nont 9', color: 'red', storage: 16, camera: 12 },
    { name: 'htc', pirce: 15000, id: 'Nont 10', color: 'blue', storage: 8, camera: 20 },
    { name: 'iphone', pirce: 12000, id: 'Nont 11', color: 'white', storage: 32, camera: 32 },
];
// map
const map = products.map(product =>product);
// console.log(map);
// forEeach
products.forEach(product =>{
    console.log(product);
})
// filter
const filterPhoneUpto2000 = products.filter(product => product.pirce > 20000);
// console.log(filterPhoneUpto2000);
// find
const findPhoneUptoBlack = products.find(product => product.color === 'black');
// console.log(findPhoneUptoBlack);

*/

// ***** 2.ternary operator ? *****.
/*
const one = 4;
const tow = 5;
 if (one > tow) {
    console.log('tow is big');
}
else {
    console.log('one is small');
}
const result = one === tow ? one > tow : 'tow is big';
console.log(result);
*/

// ****** 3.logical and logical && or || ? ******.

/*
let isActive = true;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');
// isActive ? showUser() : hideUser();
isActive && showUser();
isActive || hideUser();

*/




// ***** 4.JSON (stringify, parse) ?*****.

/*

// JSON.stringify() diya ek ta object k JSON a rupantor kora hay. JSON hosay JavaScript Objects Notation.
const student = { name: 'Faysal', id: 6, height: 6, weight: 90, color: 'samla' };
const convertStringifde = JSON.stringify(student);
// console.log(convertStringifde);

// JSON.pase() diya ek ta JSON k object a rupantor kora hay.
const convertJsonInObjects = JSON.parse(convertStringifde);
// console.log(convertJsonInObjects);

*/

/*

 // ****** 5.+'', += ?******.

// +'' a ta diya number k string a convert kor ra hoy.

const number = 78;
// console.log(number);
const convertNumberInString = number + '';
// console.log(convertNumberInString);

// += a ta diya string k number a convert kor ra hoy.

const string = '76';
// console.log(string);
const convertStringInNumber = +string;
// console.log(convertStringInNumber);

*/

// ***** 5.b ++, --, ? ******.

/*

++ a ta diya variable ar value 1 1 kora varay .
-- a ta diya variable ar value 1 1 kora comay.

*/
// ****** 5.c.active = !active ? *****.

/*
    ! chino diya boolean ar man chang kora fale a . true tha k taholay ta k false kora falay. ar false tha k lay ta k true kora faly.

    !! a ta bavohar kor lay boolean ar man chang kora fale a. potho may true k false kor bay tar por false k true kor falvay.

*/

// ****** 6.Object keys, Object values, Object entries ? ******.

/* 
const student = { name: 'Faysal', id: 6, color: 'samla', weight: 90 };
const keys = Object.keys(student);
// console.log(keys);
const value = Object.values(student);
// console.log(value);
const entries = Object.entries(student);
// console.log(entries); */




