"use strict"

// NORMAL level

/* Task 1 💻
Написать функцию getSum, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем.
Если передадим число 100 то, надо вычислить сумму чисел от 0 до 100 (должно получится 5050) */

function getSum (num) {

    let res=0;
    for (let i=0; i <= num; i++) {
    res = res + i;
    }
    return res; 
}

getSum(100);

/* const getSum = (num) => {
    let res=0;
    for (let i=0; i <= num; i++) {
    res = res + i;
    }
    return res; 
}
getSum(100); */

/* Task 2 💻
Напишите функцию которая в качестве аргумента принимает в себя сумму кредита который хочет получить клиент и 
верните результат переплаты по кредиту:
процентная ставка в год — 17%,
количество лет — 5.
Мы пишем функцию для хорошего банка, поэтому сумма кредита не увеличивается. */

const creditSum = prompt('Введите сумму кредита');

function getCreditDebt (creditSum) {

    let res=0;
    for (let i=0; i < 5; i++) {
    res += creditSum/5+(creditSum - creditSum/5*i)*0.17
    }
    return res-creditSum;
}

alert(`Сумма переплаты ${getCreditDebt(creditSum)}`);



/* Task 3 💻
Написать функцию trimString которая в качестве аргумента принимает три параметра:
строку
значение от
значение по
После вызова функция должна вернуть переданную строку обрезанную по значениям от и по */


/*function trimString (string, startIndex, endIndex) {
    return string.slice(startIndex, endIndex);
}
console.log (trimString('Simplicity is the ultimate sophistication', 5, 15));*/

const trimString = (string, startIndex, endIndex) => string.slice(startIndex, endIndex);

console.log (trimString('Simplicity is the ultimate sophistication', 5, 15));

/* Task 4 💻
Написать функцию getSumNumbers, которая будет принимать число и вычислять сумму цифр из которых состоит число.
Для 2021 это будет 5. */

function getSumNumbers (number) {
    const figures = '' + number;
    let sum = 0

    for (let i = 0; i < figures.length; i++) {
        sum += +figures[i]           
        }    
    return sum
}

console.log (getSumNumbers(44));

/* Task 5 💻
Написать функцию getSum которая принимает два целых числа a и b, которые могут быть положительными или отрицательными, 
найти сумму всех чисел между ними, включая их, и вернуть ее. Если два числа равны, верните a или b.
    getSum(1, 0) == 1   // 1 + 0 = 1
    getSum(1, 2) == 3   // 1 + 2 = 3
    getSum(0, 1) == 1   // 0 + 1 = 1
    getSum(1, 1) == 1   // 1 Since both are same
    getSum(-1, 0) == -1 // -1 + 0 = -1
    getSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2 */

function getSum(a, b)
{let sum = 0;
    for (i = a; i <= b; i++) {
            sum += i;
    }
    return sum;
}

console.log(getSum (1, 4));

/* Task 6 💻
Напишите функцию fooboo которая принимает в качестве аргумента три параметра:
булевое значение
функцию foo которая выводит в консоль свое имя
функцию boo которая выводит в консоль свое имя
Если переданное булевое значение true запускаем функцию foo иначе boo */


fooFunc = () => {console.log ('Foo')};
booFunc = () => {console.log ('Boo')};

function fooboo (boolean, fooFunc, booFunc)
{
    if (boolean) {
        fooFunc ();
    } else {booFunc ();
    }
}

console.log(fooboo(false, fooFunc, booFunc))


// ADVANCED level

/* Task 1 👨‍🏫
Реализуйте функцию, который принимает 3 целочисленных значения a, b, c.
Функция должна возвращать true, если треугольник можно построить со сторонами заданной длины, и false в любом другом случае. */

function isTriangle (a, b, c)
{
    if (a + b > c && a + c > b && b + c > a) {
        console.log (true);
    } else {console.log (false);
    }
}

isTriangle (3, 1, 3)

/* Task 2 👨‍🏫
Ваша задача - разбить плитку шоколада заданного размера n x m на маленькие квадраты.
Каждый квадрат имеет размер 1x1 и не может быть разбит. 
Реализуйте функцию, которая будет возвращать минимальное количество необходимых надломов.
Например, если вам дается плитка шоколада размером 2 x 1, 
вы можете разделить ее на отдельные квадраты всего за один надлом, 
но для размера 3 x 1 вы должны сделать два надлома.
Если входные данные недействительны, вы должны вернуть 0 
(поскольку надломы не требуются, если у нас нет шоколада для разделения).
 Ввод всегда будет неотрицательным целым числом. */

function sectionChocolate (n, m) {
    let sumSectionChocolate = 0;
    if (n >= 1 && m >= 1) {
    sumSectionChocolate = n + m - 2
    return sumSectionChocolate}
    else {console.log (0)};
}

sectionChocolate (15, 20);