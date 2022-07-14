/* Task 1 desktop_computer
Выведи все элементы массива в консоль с помощью метода forEach */
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
fibonacci.forEach(value => console.log(value)) // arrow function

const fibonacci2 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
fibonacci2.forEach(function(value) {
    console.log(value)
  }) //function expression

const fibonacci3 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
fibonacci3.forEach(function getItem(value) {
    console.log(value)
  }) //function declaration


const fibonacci4 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

function getFibonacciArr(array) {
  fibonacci4.map(el => console.log(el))
} //function declaration


/* Task 2 desktop_computer
Используя метод map создайте новый массив, на основе массива users, в котором каждый элемент массива будет содержать строку вида: ['member 1: Darya', 'member 2: Masha', ...etc] */
const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
let num = 1;
const newArrayusers = users.map(el => `member ${num++}: ${el}`);

const users2 = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
let getNewArray

function numUsers2(array) {
  let num2 = 1
  getNewArray = array.map(el => (`member ${num2++}: ${el}`))
  return (getNewArray)
} //function declaration


/* Task 3 desktop_computer
С помощью метода filter создайте новый массив в котором не будет отрицательных чисел. */
const numbers = [7, -4, 32, -90, 54, 32, -21]
const positiveNumbers = numbers.filter(item => item >= 0)

const numbers2 = [7, -4, 32, -90, 54, 32, -21]
const positiveNumbers2 = numbers2.filter(function(item) {
  if (item >= 0) {
    console.log(item)
  }
})

const numbers2 = [7, -4, 32, -90, 54, 32, -21]
let newArr

function newArray(array) {
  newArr = array.filter(item => item >= 0)
  return (newArr)
}


/* Task 4 desktop_computer
Используя метод reduce получите сумму всех чисел массива. */
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
fibonacci.reduce((sum, item) => {
  sum += item
  return (sum)
}, 0)

const fibonacci2 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
fibonacci2.reduce(function(sum, item) {
  sum += item
  return (sum)
})


/* Task 5 desktop_computer
Используя метод find найдите в массиве первое четное число. */
const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
const OnePositiveNumbers = numbers.find(item => item % 2 == 0); // arrow function


const numbers2 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
numbers2.find(function OnePositiveNumbers2(item) {
    item = item % 2 == 0
    return (item)
  }) //function declaration