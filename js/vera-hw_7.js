// Task 1 
// Выведи все элементы массива в консоль с помощью метода forEach
// const fibonac  55, 89, 144, 233, 377, 610, 987]
// Реализуйте решение двумя способами, используя function declaration & arrow function

// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
// fibonacci.forEach(element => console.log(element));


// Task 2 
// Используя метод map создайте новый массив, на основе массива users, в котором каждый элемент массива будет содержать строку вида:
// ['member 1: Darya', 'member 2: Masha', ...etc]
// const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
// Реализуйте решение двумя способами, используя function declaration & arrow function.

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
// const users2 = users.map((el) =>  'member 1: '+ el );

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
// const users2 = users.map(function (el) {
//     return 'member 1: ' + el;
// });



// Task 3
// С помощью метода filter создайте новый массив в котором не будет отрицательных чисел.
// const numbers = [7, -4, 32, -90, 54, 32, -21]
// Реализуйте решение двумя способами, используя function declaration & arrow function.

// const numbers = [7, -4, 32, -90, 54, 32, -21]
// const positiveNumbers = numbers.filter((el) => el >= 0);

const numbers = [7, -4, 32, -90, 54, 32, -21]
const positiveNumbers = numbers.filter(function(el) {
    return el >= 0;
});
console.log (positiveNumbers);

// Task 4 
// Используя метод reduce получите сумму всех чисел массива.
// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
// Реализуйте решение двумя способами, используя function declaration & arrow function.

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
const resFibonacci = fibonacci.reduce((sum, cur) => {
    sum += cur;
    return sum
}, 0);

// Task 5
// Используя метод find найдите в массиве первое четное число.
// const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
// Реализуйте решение двумя способами, используя function declaration & arrow function.

// const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
// const evenNumbers = numbers.find((el) => el % 2 == 0);
