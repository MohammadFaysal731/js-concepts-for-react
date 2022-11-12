// 1.JSON =>stingify parse
const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
};

// console.log(student);
const studentJSON = JSON.stringify(student);
// console.log(studentJSON);

const convertJSON = JSON.parse(studentJSON);
// console.log(convertJSON);

// 2.fetch
/* fetch('url')
    .then(res => res.json())
    .then(data => console.log(data))
 */
// 3.Get Object keys , value and get keys and value togther
const keys = Object.keys(student);
// console.log(keys); 
const value = Object.values(student);
// console.log(value);
const entries = Object.entries(student);
// console.log(entries);

// 4.using forEach()
const numbers = [23, 54, 67, 87, 78];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// using for of loop on array like object

// using loop on object using for in

// add or remove from an array 
const products = [
    { name: 'laptop', price: 3200, brand: 'len', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
    { name: 'wacth', price: 3000, brand: 'casiso', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

const newProduct = { name: 'webcam', price: 700, brand: 'Lal' };

// copy product array and then add newProduct 
const addNewProduct = [...products, newProduct];
console.log(addNewProduct);

// create a new array without one specific item
// remove phone menas create a new array without the phone
const remaining = products.filter(product => product.name !== 'phone');
console.log(remaining);