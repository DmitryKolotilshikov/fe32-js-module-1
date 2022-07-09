// Objects

const person = {
    name: 'Tim',  // name это ключ (ключи всегда string) | 'Tim' это значение
    age: 20,
    greet(text) {
        console.log('Hello!', text);
    }
}

// console.log(person.name);
// console.log(person.age);
// console.log(person);

// person.greet('How are you?');

// =======================================

const color = 'gold';

const car = {
    mark: 'Audi',
    model: 'Q7',
    color, // dynamic key and value (динамический ключ и значение)
    'year': '2022',
    'engine volume': '3.5',
    ['gear box']: 'auto'
}

console.log(car);
console.log(car.year);
console.log(car['engine volume']);

car.mileage = '0 km';

console.log(car.mileage);

// ==============================

delete car.model;  // delete property
console.log(car);

console.log('mark' in car);  // check property
console.log('model' in car); // check property


// ========================
const obj1 = { a: 1 };
const obj2 = { a: 1 };

console.log(obj1 === obj2); // false

const obj3 = obj2;
console.log(obj2 === obj3); // true

obj3.a = 2;
console.log(obj3.a); // 2
console.log(obj2.a); // 2

// =========================

const cat = { color: 'black' };

console.log(cat.name);  // undefined
cat.name = 'kot';
console.log(cat.name);  // kot

// ========================================

for (let key in cat) {      // for in cycle | for in цикл
    console.log(`${key}: ${cat[key]}`);
}

// ========================================

const makeObject = (name, age) => {
    // return {
    //     name: name,
    //     age: age
    // }

    // const obj = { name, age };
    // return obj;

    return { name, age } // dynamic key and value
}

const person1 = makeObject('Alexandra', 25);
console.log('person1: ', person1);

const dog = makeObject('dog', 3);
console.log('dog: ', dog);

// ========================================

// Example tasks

// 1 Task
const schedule = {};
console.log(schedule);  // {} пустой объект (не undefined);

const isEmpty = (obj) => {
    for (const key in obj) {
        return false;
    }
    return true;
}

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";
console.log(isEmpty(schedule)); // false

// 2 Task

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

const getSum = (obj) => {
    let sum = 0;

    for (const key in obj) {
        sum += obj[key];
    }

    return sum;
}

console.log(`Sum: ${getSum(salaries)}`);

// 3 Task

const menu = {
    width: 200,
    height: 300,
    title: "My menu"
}

const multiplyNumeric = (obj) => {
    for (const key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
    return obj;
}

console.log(multiplyNumeric(menu));