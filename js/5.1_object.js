// This - это объект перед точкой. ЭТО ОБЪЕКТ
console.log('5.1_object.js');

function hello() {
    console.log(this); // динамический, изменяется в зав-ти от конетекста исполнения
}

// Метод - это функция внутри объекта
// После точки в объекте - это свойство. А уже свойство может быть функцией (методом) или значением.

let person = {
    name: 'Dmitry',
    age: 24,
    birth: 1819,
    greet: hello,
    // greetWindow: hello.bind(window),
    // greetWindow: hello.bind(globalThis),
    greetWindow: hello.bind(this),
    getName() {
        console.log(this.name);
    },
    getAge() {
        console.log(this.age);
    },
    getBirth() {
        console.log(person.birth); // так работает, но так не нужно делать, пример ниже
    },
}

// const person1 = person;
// person = null;

// ===========================================

function getNameAndAge() {
    console.log(`${this.name}--${this.age}`);
}

// person.getNameAndAge = getNameAndAge;
// person.getNameAndAge();

// ==========================================

const alex = {
    name: 'Alex',
    age: 20
}

// person.getName.call(alex);

// bind, call, apply

// =========================================
function getInfo(country, city) {
    console.log(`${this.name} - ${country} - ${city}`);
};

getInfo.bind(person, 'Belarus', 'Minsk')();  // bind не вызывает функцию

getInfo.call(alex, 'Ukraine', 'Kiev'); // call вызывает функцию, принимает сколько угодно аргументов

getInfo.apply(alex, ['Russia', 'Moscow']); // apply вызывают функцию и принимает массив с аргументами

// ===========================================
