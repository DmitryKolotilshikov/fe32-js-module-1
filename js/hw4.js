'use strict';

//Task 1
//Написать функцию getSum, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем.

const getSum = (number) => {
  let result = 0;
  for (let i = 0; i <= number; i++) {
    result += i;
  }
  return result;
};
console.log(getSum(100));

//====================================================================================================================

//Task 2
//Напишите функцию которая в качестве аргумента принимает в себя сумму кредита который хочет получить клиент и верните результат переплаты по кредиту:
//процентная ставка в год — 17%,
//количество лет — 5.

const sumCredit = (summa) => {
  const month = 60;
  const percentInMonth = 0.0141;
  const K = 0.0248;
  const payInMonth = summa * K;
  const pereplata = month * payInMonth - summa;
  return pereplata;
};
console.log(sumCredit(10000));

//====================================================================================================================

//Task 3
//Написать функцию trimString которая в качестве аргумента принимает три параметра:
//строку
//значение от
//значение по

const trimString = (str, a, b) => {
  const trimStr = str.slice(a, b);
  return trimStr;
};
console.log(trimString('TaskTest', 0, 4));

//====================================================================================================================

//Task 4
//Написать функцию getSumNumbers, которая будет принимать число и вычислять сумму цифр из которых состоит число.

const getSumNumbers = (getNumber) => {
  let arr = [];
  let numToString = getNumber.toString();
  let len = numToString.length;
  for (let i = 0; i < len; i++) {
    arr.push(+numToString.charAt(i));
  }
  const sum = arr.reduce(
    (previousSum, currentSum) => previousSum + currentSum,
    0
  );
  console.log(sum);
};
getSumNumbers(33333);

//====================================================================================================================

//Task 5
//Написать функцию getSum которая принимает два целых числа a и b, которые могут быть положительными или отрицательными, найти сумму всех чисел между ними, включая их, и вернуть ее. Если два ///числа равны, верните a или b.

const getSumTask5 = (arr) => {
  let fullArr = [];
  let sum = 0;

  arr.sort(function (a, b) {
    return a - b;
  });

  for (let i = arr[0]; i <= arr[1]; i++) {
    fullArr.push(i);
  }

  sum = fullArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  return sum;
};
console.log(getSumTask5([1, 3]));

//====================================================================================================================

//Task 6
//Напишите функцию fooboo которая принимает в качестве аргумента три параметра:
//булевое значение
//функцию foo которая выводит в консоль свое имя
//функцию boo которая выводит в консоль свое имя
//Если переданное булевое значение true запускаем функцию foo иначе boo

const fooboo = (bool, foo, boo) => {
  function foo() {
    console.log('foo');
  }
  function boo() {
    console.log('boo');
  }
  if (bool === true) {
    return foo();
  } else {
    return boo();
  }
};
fooboo(false);

//====================================================================================================================

//advanced level Task1
//Реализуйте функцию, который принимает 3 целочисленных значения a, b, c. Функция должна возвращать true, если треугольник можно построить со сторонами заданной длины, и false в любом другом случае.

const triangle = (a, b, c) => {
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  } else {
    return false;
  }
};
console.log(triangle(1, 2, 5));

//====================================================================================================================

//Task2
//Ваша задача - разбить плитку шоколада заданного размера n x m на маленькие квадраты. Каждый квадрат имеет размер 1x1 и не может быть разбит. Реализуйте функцию, которая будет возвращать минимальное количество необходимых надломов.
//Например, если вам дается плитка шоколада размером 2 x 1, вы можете разделить ее на отдельные квадраты всего за один надлом, но для размера 3 x 1 вы должны сделать два надлома.
//Если входные данные недействительны, вы должны вернуть 0 (поскольку надломы не требуются, если у нас нет шоколада для разделения). Ввод всегда будет неотрицательным целым числом.

const breakChocolate = (a, b) => (a * b - 1 > 0 ? a * b - 1 : 0);
console.log(breakChocolate(3, 3));

//====================================================================================================================

//Task3
//Напишите программу для вычисления общей стоимости покупки телефонов. Вы будете продолжать покупать телефоны (подсказка: циклы!), пока у вас не закончатся деньги на банковском счете. Вы также будете покупать аксессуары для каждого из телефонов.
//После того, как вы посчитаете сумму покупки, прибавьте налог, затем выведите на экран вычисленную сумму покупки, правильно отформатировав её.
//Наконец, сверьте сумму с балансом вашего банковского счета, чтобы понять можете вы себе это позволить или нет.
//Вы должны настроить некоторые константы для «ставки налога», «цены телефона», «цены аксессуара», также как и переменную для вашего «баланса банковского счета».
//Вам следует определить функции для вычисления налога и для форматирования цены со знаком валюты и округлением до двух знаков после запятой.
//Попробуйте включить ввод данных в вашу программу, например с помощью функции prompt(..). Вы можете, например, запросить у пользователя баланс банковского счета. Развлекайтесь и будьте изобретательны!

const tax = 0.12;
const phonePrice = 80.7;
const accessoryPrice = 3.99;

let bankBalance = prompt('enter balance:');
let amount = 0;

function buyPhonesAndAccessories() {
  const calculateTax = (amount) => amount * tax;
  const formatAmount = (amount) => amount.toFixed(2) + '$';
  while (amount < bankBalance) {
    amount = amount + phonePrice + accessoryPrice;
  }
  amount = amount + calculateTax(amount);
  console.log('Ваш баланс:' + bankBalance + '$');
  console.log('Итого к оплате: ' + formatAmount(amount));
  if (amount > bankBalance) {
    console.log('Недостаточно средств на счёту. :(');
  }
}
buyPhonesAndAccessories();
