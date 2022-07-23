'use strict'

// Task 1
// Выведи все элементы массива в консоль с помощью метода forEach

// Реализуйте решение двумя способами, используя function declaration & arrow function

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

// 1)

fibonacci.forEach((el) => {
    console.log(el);
});

// 2)

fibonacci.forEach(function (el) {
    console.log(el);
});



// Task 2
// Используя метод map создайте новый массив, на основе массива users, в котором каждый элемент массива будет содержать строку вида:

// ['member 1: Darya', 'member 2: Masha', ... etc]

// Реализуйте решение двумя способами, используя function declaration & arrow function.

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']

let numb = 1;

// 1)

const memberUsers = users.map(el => `member ${numb++}: ${el}`);

console.log(newArrayusers);

// 2)

const memberUsers2 = users.map(function (el) {
    return `member ${numb++}:  ${el}`;
});
console.log(memberUsers2);



// Task 3
// С помощью метода filter создайте новый массив в котором не будет отрицательных чисел.

// Реализуйте решение двумя способами, используя function declaration & arrow function.

const numbers = [7, -4, 32, -90, 54, 32, -21];

// 1)

const newNumbers = numbers.filter(function (el) { return el > -1 });

console.log(newNumbers);

// 2)

const newNumbers2 = numbers.filter( el => el > -1);

console.log(newNumbers2);



// Task 4
// Используя метод reduce получите сумму всех чисел массива.

// Реализуйте решение двумя способами, используя function declaration & arrow function.


const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

// 1)

const sumFibonacci = fibonacci.reduce ((el, numb) => el + numb);

console.log(sumFibonacci);

// 2)

const sumFibonacci2 = fibonacci.reduce (function (el, numb) {return el + numb});

console.log(sumFibonacci2);



// Task 5

// Используя метод find найдите в массиве первое четное число.

// Реализуйте решение двумя способами, используя function declaration & arrow function.

const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]

const num = 2

// 1)

const number = numbers.find (el => el % num === 0);

console.log(number );

// 2)

const number2 = numbers.find (function (el) {return el % num === 0});

console.log(number2);




