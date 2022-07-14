'use strict';

//Task 1
//Выведи все элементы массива в консоль с помощью метода forEach

const fibonacci = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];
//Function declaration
function arrayEach(arr) {
  arr.forEach((el) => console.log(el));
}
arrayEach(fibonacci);
//Arrow function
const arrayEach2 = (arr) => arr.forEach((el) => console.log(el));
arrayEach2(fibonacci);

//Task 2
//Используя метод map создайте новый массив, на основе массива users, в котором каждый элемент массива будет содержать строку вида:['member 1: Darya', 'member 2: Masha', ... etc]
const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

//Function declaration
function mapArray(arr) {
  return arr.map((el, index) => `member ${index}: ${el}`);
}
mapArray(users);

//Arrow function
const mapArrowArr = (arr) => arr.map((el, index) => `member ${index}: ${el}`);
mapArrowArr(users);

//Task 3
//С помощью метода filter создайте новый массив в котором не будет отрицательных чисел.
const numbers = [7, -4, 32, -90, 54, 32, -21];

//Function declaration
function arrayWithoutNegative(arr) {
  return arr.filter((el) => el >= 0);
}
arrayWithoutNegative(numbers);

//Arrow function
const arrayWithoutNegativeArrow = (arr) => arr.filter((el) => el >= 0);
arrayWithoutNegativeArrow(numbers);

//Task 4
//Используя метод reduce получите сумму всех чисел массива.
//Function declaration
function fibonacciReduce(arr) {
  return arr.reduce((acc, current) => acc + current, 0);
}
fibonacciReduce(fibonacci);
//Arrow function
const fibonacciSum = (arr) => arr.reduce((acc, current) => acc + current, 0);
fibonacciSum(fibonacci);

//Task 5
//Используя метод find найдите в массиве первое четное число.
const numbers1 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
//Function declaration
function findNumber(arr) {
  return arr.find((el) => el % 2 === 0);
}
findNumber(numbers1);

//Arrow function
const findNumberArrow = (arr) => arr.find((el) => el % 2 === 0);
findNumberArrow(numbers1);
