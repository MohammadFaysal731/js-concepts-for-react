/* const numbres = [89, 35, 98, 12];
const student = {
    name: 'Faysal',
    age: 23,
    movie: ['King Khan', 'Dhaka Mastan']
};
// 1.templete string 
const about = `MY Name is ${student.name} age of ${student.age} has number ${numbres[2]}also liked movies ${student.movie[0]}`;
console.log(about); */

// 2.arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}
// console.log(doMath(2, 5))

// 3.spread operator
const numbres = [89, 35, 98, 12];
const newNubers = [...numbres];
numbres.push(99);
numbres.push(99);
numbres.push(99);
console.log(numbres);
console.log(newNubers);

// creat a new array from an older array and add an element 
const currentNumbers = [...numbres, 55];
console.log(currentNumbers);