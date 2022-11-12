// 1.array destructuring 
const numbers = [42, 65];
const first = numbers[0];
const second = numbers[1];
// console.log(first, second);
const [first1, second1] = numbers;
// console.log(first1, second1);

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}
// console.log(boxify(90, 34));
// const [first2, second2]=[90, 34]
const [first2, second2] = boxify(90, 34);
console.log(first2, second2);

const student = {
    name: 'Salib khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan'],

};
// const [firstMovie, seasondMovie] = ['King khan', 'Dhakar Mastan'];
const [firstMovie, seasondMovie] = student.movies;
console.log(firstMovie, seasondMovie);

// object destructuring 
// const { name, age } = { name: 'alu', age: 14 };
const { name, age } = { id: 12, name: 'alu', salary: 3400, age: 14 };
// console.log(name, age);

const employe = {
    id: 'Vs code',
    designation: 'developer',
    machina: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'KumarKhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            barand: 'garmin'

        }
    }

};
const { machina, id } = employe;
// console.log(machina, id);
const { weight, address } = employe.specification;
// console.log(weight, address);
const { barand } = employe?.specification?.watch;
console.log(barand);