// export const title = 'hello world!'; // именованный экспорт

// const city = 'Gomel';

// export default city; // экспорт по умолчанию может быть только один в модуле

// Destructuring 

const person = {
    name: 'Alex',
    age: 25,
    skills: {
        html: 5,
        css: 7,
        js: 9
    }
};

// const name = person.name;
// const age = person.age;
// const { name, age } = person;
const { name: personName, age: personAge} = person;
console.log(personName, personAge);

const { city = 'Minsk'} = person; // присвоение значения по умолчанию
console.log(city); // Minsk т.к значение в объекте  не существует

const { age = 35 } = person; // присвоение значения по умолчанию
console.log(age) // 25 т.к значение в объекте существует

// const { skills } = person;
const { skills: { html, css, js } } = person;

console.log(html, css, js);

// ======================================

const cars = ['volvo', 'ford', 'opel', 'tesla'];

const [volvo, ford, opel] = cars;
const [, , , tesla] = cars;

console.log(volvo, ford, opel)
console.log(tesla)

// const newCars = [...cars];
const [...newCars] = cars;

console.log(newCars);
console.log(newCars === cars);

// =======================================

let num1 = 1;
let num2 = 5;

[num1, num2] = [num2, num1];

console.log(num1, num2);

// ======================================

const deepArray = [ ['a', 'b'], ['c', 'd'] ];

const [ [aStr, b], [cStr, d] ] = deepArray;

console.log(aStr, b, cStr, d);

// =====================================

// const getNameAndAge = (person) => {
//     return `Person: ${person.name}, ${person.age}`
// }
const getNameAndAge = ({ name, age }) => {
    return `Person: ${name}, ${age}`
}

console.log(getNameAndAge(person))

// ======================================
