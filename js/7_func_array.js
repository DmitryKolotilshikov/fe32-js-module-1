// Functions
// IIFE - Immediately Invoke Function Expression

// (function func(name) {
//     console.log(`Hello ${name}`);
// })('Alex')

// (name => console.log(`Hello ${name}`))('Olga')

// ==============================================

// New Function - Функции конструкторы

function Car(name, color, year = 1900) {
    // this = {}

    this.name = name;
    this.color = color;
    this.year = year;

    this.getNameAndColor = function() {
        return `${this.name}:${this.color}`
    }

    this.getYear = function() {
        return `${this.year}`
    }

    // return this
}

const opel = new Car('Opel', 'dark blue', 1989);
const bmw = new Car('BMW', 'light red');

// console.log('opel: ', opel);
// console.log('bmw: ', bmw);

// ==========================================

class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    getNameAndColor() {
        return `${this.name}----${this.color}`
    }
}

const cat = new Animal('Uvasya', 'white');
const dog = new Animal('Dog', 'grey');

// console.log('cat: ', cat);

// =========================================

// const someNumber = 42;
// console.log(`someNumber: ${someNumber}`)
// console.log('someNumber ', someNumber)
// console.log('someNumber ' + someNumber)

// ========================================

// Reduce

const numberArray = [1, 2, 33, 4, 5];

const res = numberArray.reduce((sum, cur, index, thisArr) => {
    sum += cur;
    // console.log(
    //     'sum: ', sum, 
    //     'current element: ', cur, 
    //     'index: ', index, 
    //     'thisArray: ', thisArr
    //     );
    return sum 
}, 0);

// console.log(res);

// ==========================================

// sort

const someArray = [2, 1, 45, 0, 33];
const someObjArray = [
    { name: 'Elena', age: 18 },
    { name: 'Dmitry', age: 15 },
    { name: 'Anna', age: 32}
];

const sortNumbers = (a, b) => a - b;

const sortAge = (a, b) => a.age > b.age ? 1 : -1;
const sortName = (a, b) => a.name > b.name ? 1 : -1;

// console.log(someArray.sort(sortNumbers))

// ОБЪЕКТЫ - КОПИРУЮТСЯ ПО ССЫЛКАМ, также объекты которые находятся в массивах

// console.log(someObjArray.sort(sortAge));
// console.log(someObjArray.sort(sortName));

// const someObjArray2 = someObjArray;
// someObjArray2[0].name = '!!!!!!!!!!!!';

// console.log(someObjArray);
// console.log(someObjArray2);

// ===========================================

// some & every  (return true or false)

const arrayOfNumbers = [22, 33, 45, 999, 1030, 354];
// arrayOfNumbers.some((el) => el === 33) // true
// arrayOfNumbers.some((el) => el === 34) // false

// someObjArray.some(el => el.age < 18) // true
// someObjArray.some(el => el.age < 15) // false

const arrayOfEqualNumbers1 = [22, 22, 22];
const arrayOfEqualNumbers2 = [22, 22, 22, 23];

// arrayOfEqualNumbers1.every(el => el === 22) // true
// arrayOfEqualNumbers2.every(el => el === 22) // false

// ===========================================


