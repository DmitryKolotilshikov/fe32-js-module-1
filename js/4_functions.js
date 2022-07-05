// Functions
// Функции в JavaScript представляют собой последовательность команд, которые могут быть выполнены в программе. Функции позволяют вычислять значение и совершать процедуру множество раз.


// Function Declaration

function greet() {      // Для создания функции мы используем объявление функции. greet - название функции
  console.log("Hello");  // Тело функции
}

// greet();  // Вызов функции, который выполняет тело функции

function calcSum(a, b) { // Параметры (служат как переменные с которыми работает в своей области видимости)
    return a + b; // инструкция return возвращает значение из функции, иначе возвращает undefined (значение по умолчанию)
}

const result = calcSum(1, 2); // при вызове функции параметры называют аргументы
// console.log(result);
// console.log(calcSum(1, 2));

const num = 1;  // глобальная или внешняя область видимости
{               // локальная или внутрення область видимости
    const num = 2;
    // console.log(num); 
}
// console.log(num);

for(let i = 0; i < 1; i++) {
    const num = 3;  // локальная или внутрення область видимости
    // console.log(num);
}

// =============================================================

// Function expression (фукнциональные выражения)

const greet2 = function() {
    console.log('Hello from greet2');
}
// greet2();

// Arrow functions (стрелочные функции)

const greet3 = () => {
    console.log('Hello from greet3');
}
// greet3();

const calcSum2 = (a, b) => a + b;
// console.log(calcSum2(1,9));

// Function Declaration vs Function Expression

// • Hoisting (всплытие)
// • Anonymous function name
// • Может возвращать значение без return

const someFunc = (fn) => fn();  // Pass function as arguments | Передавать функции как аргументы
// someFunc(greet3);

// Compare Functions (сравнение Функций)

function fun1() {
    return 1;
}
function fun2() {
    return 1;
}

const func1 = () => 1;
const func2 = () => 1;

// console.log(fun1 === fun2);       // false
// console.log(func1 === func2);     // false

// console.log(fun1() === fun2());    // true
// console.log(func1() === func2());  // true

// =================================================================

// Унарный опертор (один операнд) +, -, ++, --          (пример: +b, -1, b++, b--)
// Бинарный оператор (два операнда) +, -, *, /, %       (пример: a + b, a - b, a * b)
// ternary operator (тернарный оператор)  a > b ? true :  false

const yesOrNo = 20 > 10 ? 'Нравится' : 'Не нравится'; // Условия всегда возвращает булевый результат под капотом (true или false)

// if (20 > 10) {
//     console.log('Да');
// } else {
//     console.log('Нет');
// }

// console.log(yesOrNo);

// ========================================================

// Functions Examples: 

const checkAge = age => {
    if (age >= 18) {
        console.log('Сходи в ночной клуб');
    } else {
        console.log('Ложись спать!');
    }
}

checkAge(10);
checkAge(25);

const budget = (salary) => {
    const tax = 150;
    const petrol = 100;
    const goods = 300;
    const event = 200;

    const result = salary - tax - petrol - goods - event;
    return console.log(result);
}

budget(1000);
budget(895);
budget(1895);


// ==================================================

const getInfo = (name, age, country) => console.log(`Я ${name}, мне ${age} и я из ${country}`);
getInfo('Тим', 20, 'Беларуси');

// ==================================================

// Оператор нулевого слияния

const animal = null;  // null or undefined
const pet = animal ?? 'Cat'; // Если animal null или undefined, то будет Cat, иначе animal

console.log(pet);

console.log(20 < 10 ?? 'Hello');
console.log(false ?? 'Hello');
console.log('' ?? 'Hello');
console.log(0 ?? 'Hello');
console.log(null ?? undefined);
