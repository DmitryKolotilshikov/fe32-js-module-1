// functions

function sum(a, b) {
    return a + b;
}

const res = sum(1, 2);

// const name = prompt('Enter your name');
// ===========================================

// callback - Функция обратного вызова, которая передена 
// как аргумент в другую функцию и вызывается по завершению
// какого-либо действия

const someArr = [1, 2, 3];

const changeArray = (el, index, currentArray) => {
    console.log(el, index, currentArray)
    return el + index;
};

// const newSomeArr = someArr.map((el, index, currentArray) => {
//     console.log(el, index, currentArray)
//     return el + index;
// })

// const newSomeArr = someArr.map(changeArray);

// const newSomeArr1 = someArr.map(el => el + ' Hello');

const someString = 'Hello';

const newSomeString = 
someString.split('').map(el => el.repeat(3)).join('');

// splice // мутирует (изменяет) исходный массив
// slice // возвращает массив извлеченных элементов

const numberArray1 = [1, 2, 3, 4, 5];

const deletedELement = numberArray1.splice(1, 2, 'Hello', 'World', '!');

const numberArray2 = [1, 2, 3, 4, 5];

// const newNumberArray2 = numberArray2.slice(-3);
// const newNumberArray2 = numberArray2.slice(1);
// const newNumberArray2 = numberArray2.slice(1, 3);

// ================================================

// Closures (замыкания)
// Замыкания - это функция, которая запоминает свои внешние
// переменные и может получить к ним доступ


const counter = () => {
    let count = 0;
    return () => count++;
}
const increment1 = counter();
const increment2 = counter();
increment1();
increment1();
increment1();
increment1();
increment1();
increment1();
increment1();

// =============================================