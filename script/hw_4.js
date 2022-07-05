/*
  TASK 1
  Написать функцию getSum, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем.

  Если передадим число 100 то, надо вычислить сумму чисел от 0 до 100 (должно получится 5050)
*/

/*console.log('TASK 1');
const getSumNumber = prompt('Enter number:');

function getSum(num) {
  let res = 0;

  for(let i = 0; i <= num; i++) {
    res += i;
  }

  console.log(res);
}
getSum(getSumNumber);*/

/*
  ==================================
*/


/*
  TASK 2
  Напишите функцию которая в качестве аргумента принимает в себя сумму кредита который хочет получить клиент и верните результат переплаты по кредиту:

  процентная ставка в год — 17%,
  количество лет — 5.
  Мы пишем функцию для хорошего банка, поэтому сумма кредита не увеличивается.
*/

/*console.log('TASK 2');
const creditBudget = prompt('Enter credit budget:');

function getCreditRes(price) {
  const creditPercentage = prompt('Enter credit percentage:');
  const creditBit = (creditPercentage / 100) + 1;
  const creditYears = prompt('Enter credit years:');
  const calculateCreditOverpayment = (price * creditBit * creditYears) - (price * creditYears);

  console.log(calculateCreditOverpayment);
}

getCreditRes(creditBudget);*/

/*
  ==================================
*/


/*
  TASK 3
  Написать функцию trimString которая в качестве аргумента принимает три параметра:

    строку
    значение от
    значение по

  После вызова функция должна вернуть переданную строку обрезанную по значениям от и по
*/

/*console.log('TASK 3');
const stringToBeTrimmed = prompt('Enter string to trim:');
const trimFrom = prompt('Enter number to trim from:');
const trimTo = prompt('Enter number to trim to:');
const trimString = (stringToBeTrimmed, trimFrom, trimTo) => stringToBeTrimmed.slice(trimFrom, trimTo);
console.log(trimString(stringToBeTrimmed, trimFrom, trimTo));*/

/*
  ==================================
*/


/*
  TASK 4
  Написать функцию getSumNumbers, которая будет принимать число и вычислять сумму цифр из которых состоит число.

  Для 2021 это будет 5
*/

/*console.log('TASK 4');
const numToBeSummed = String(prompt('Enter number to sum numbers:'));

function getSumNumbers(sum) {
  let sumNumbersRes = 0;

  for(let i = 0; i < numToBeSummed.length; i++) {
    sumNumbersRes += Number(numToBeSummed[i]);
  }

  console.log(sumNumbersRes);
}

getSumNumbers(numToBeSummed);*/

/*
  ==================================
*/


/*
  TASK 5
  Написать функцию getSum которая принимает два целых числа a и b, которые могут быть положительными или отрицательными, найти сумму всех чисел между ними, включая их, и вернуть ее. Если два числа равны, верните a или b.

    getSum(1, 0) == 1   // 1 + 0 = 1
    getSum(1, 2) == 3   // 1 + 2 = 3
    getSum(0, 1) == 1   // 0 + 1 = 1
    getSum(1, 1) == 1   // 1 Since both are same
    getSum(-1, 0) == -1 // -1 + 0 = -1
    getSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
*/

console.log('TASK 5');
function getSumNum(a, b) {

  if(a === b) {

    console.log(`${a} Since both are same`);

  } else if(a < b) {

    let sum = 0;
    for (let i = a; i <= b; i++) {
      sum += i;
    }
    console.log(`${sum}`);

  } else if(a > b) {

    let sum = 0;
    for (let i = b; i <= a; i++) {
      sum += i;
    }
    console.log(`${sum}`);

  }
}
getSumNum (-1, 2);

/*
  ==================================
*/


/*
  TASK 6
  Напишите функцию fooboo которая принимает в качестве аргумента три параметра:
  
  булевое значение
  функцию foo которая выводит в консоль свое имя
  функцию boo которая выводит в консоль свое имя
  Если переданное булевое значение true запускаем функцию foo иначе boo
*/

console.log('TASK 6');
function fooboo(foobooCheck, foo, boo) {

  if(foobooCheck) {
    foo();
  } else {
    boo();
  }
}

function foo() {
  console.log(foo.name);
}
function boo() {
  console.log(boo.name)
}

fooboo(false, foo, boo);

/*
  ==================================
*/


/*
  ADVANCED TASK 1
  Реализуйте функцию, который принимает 3 целочисленных значения a, b, c. Функция должна возвращать true, если треугольник можно построить со сторонами заданной длины, и false в любом другом случае.
*/

console.log('ADVANCED TASK 1');

function buildTriangle(a, b, c) {
  return ((a + b > c) && (a + c > b) && (b + c > a));
}
console.log(buildTriangle(8, 4, 4));

/*
  ==================================
*/


/*
  ADVANCED TASK 2
  Ваша задача - разбить плитку шоколада заданного размера n x m на маленькие квадраты. Каждый квадрат имеет размер 1x1 и не может быть разбит.
  Реализуйте функцию, которая будет возвращать минимальное количество необходимых надломов.

  Например, если вам дается плитка шоколада размером 2 x 1, вы можете разделить ее на отдельные квадраты всего за
  один надлом, но для размера 3 x 1 вы должны сделать два надлома.

  Если входные данные недействительны, вы должны вернуть 0 (поскольку надломы не требуются, если у нас нет шоколада для разделения).
  Ввод всегда будет неотрицательным целым числом.
*/

console.log('ADVANCED TASK 2');

function devideChocolate(a, b) {

  const ifDevide = (a > 1 || b > 1);

  if(ifDevide) {
    return a + b - 2;
  } else {
    return 0;
  }
}

console.log(devideChocolate(1, 2));

/*
  ==================================
*/