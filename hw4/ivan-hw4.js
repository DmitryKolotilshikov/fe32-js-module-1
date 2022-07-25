'use strict';

//Task 1
// Написать функцию getSum, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем.


const number = +prompt ("Введите число");

function getSum (number) {
  let sum = 0
  for (let i = 0; i <= number; i++) {
    sum += i;
  }
  alert (sum);
}

getSum(number)

//Task 2
// Напишите функцию которая в качестве аргумента принимает в себя сумму кредита который хочет получить клиент и верните результат переплаты по кредиту:


const credit = +prompt ("Введите сумму кредита");
const age = 5;
const tax = 17;

function creditValue (credit, age, tax) {
  console.log (Переплата составит ${(((credit / age) * ((tax + 100) / 100)) * age) - credit});
}

creditValue (credit, age, tax);


//Task 3
// Написать функцию trimString которая в качестве аргумента принимает три параметра:

// строку
// значение от
// значение по
// После вызова функция должна вернуть переданную строку обрезанную по значениям от и по

function trimString(string, before, after) {
    return (string.slice(before, after))
  }
  console.log(trimString('animal', 1, 5))


// Task 4
// Написать функцию getSumNumbers, которая будет принимать число и вычислять сумму цифр из которых состоит число.

// Для 2021 это будет 5.

function getSumNumbers(num) {
    let sum = 0;
    let str = String(num);
    for(let i = 0; i < str.length; i++) sum += Number(str[i]);
    return sum;
}

console.log(getSumNumbers(2021));

// Task 5
// Написать функцию getSum которая принимает два целых числа a и b, которые могут быть положительными или отрицательными. 
// Найти сумму всех чисел между ними, включая их, и вернуть ее. Если два числа равны, верните a или b.

function getSum(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
      sum = sum + i;
    }
    return (sum)
  }
  console.log(getSum(-1, 2));

// Task 6
// Напишите функцию fooboo которая принимает в качестве аргумента три параметра:

// булевое значение
// функцию foo которая выводит в консоль свое имя
// функцию boo которая выводит в консоль свое имя
// Если переданное булевое значение true запускаем функцию foo иначе boo

function fooboo(boolean, foo, boo) {
    foo = () => { console.log('foo') };
    boo = () => { console.log('boo') };
    if (boolean === true) {
      foo()
    } else {
      boo()
    }
  }
   fooboo(true);