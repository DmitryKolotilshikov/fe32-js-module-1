"use strict"

// HOMEWORK 7

// NORMAL level

/* Task 1 🖥
Выведи все элементы массива в консоль с помощью метода forEach

    const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

Реализуйте решение двумя способами, используя function declaration & arrow function */

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

fibonacci.forEach((element) => {
   console.log (element);
});

fibonacci.forEach(function callBackFibonacci(element) {
    console.log(element);
  });

/* Task 2 🖥
Используя метод map создайте новый массив, на основе массива users, 
в котором каждый элемент массива будет содержать строку вида:

['member 1: Darya', 'member 2: Masha', ... etc]

    const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
Реализуйте решение двумя способами, используя function declaration & arrow function. */

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
const newUsers1 = users.map((el, index) => `member ${index+1}: ${el}`);
console.log (newUsers1);

const newUsers2 = users.map(function(el, index) {
    return `member ${index+1}: ${el}`
});
console.log (newUsers2);

/* Task 3 🖥
С помощью метода filter создайте новый массив в котором не будет отрицательных чисел.

    const numbers = [7, -4, 32, -90, 54, 32, -21]
Реализуйте решение двумя способами, используя function declaration & arrow function. */

const numbers = [7, -4, 32, -90, 54, 32, -21];
const filteredNumbers1 = numbers.filter((element) => element >= 0);
console.log (filteredNumbers1);

const filteredNumbers2 = numbers.filter(function(element) {
    return element >= 0;
});
console.log (filteredNumbers2);

/* Task 4 🖥
Используя метод reduce получите сумму всех чисел массива.

    const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
Реализуйте решение двумя способами, используя function declaration & arrow function. */

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
const sumFibonacci1 = fibonacci.reduce((acc, cur) => {
    acc += cur;
    return acc
}, 0);

console.log(sumFibonacci1);

const sumFibonacci2 = fibonacci.reduce(function (acc, cur) {
    acc += cur;
    return acc
}, 0);

console.log(sumFibonacci2);


/* Task 5 🖥
Используя метод find найдите в массиве первое четное число.

    const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
Реализуйте решение двумя способами, используя function declaration & arrow function. */

const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
const numbersFind1 = numbers.find((element) => element % 2 === 0);
console.log(numbersFind1);

const numbersFind2 = numbers.find(function(element) {
    return element % 2 === 0;
})
console.log(numbersFind2);


// ADVANCED level

/* Task 1 👨‍🏫
Написать функцию конструктор Student
В каждом объекте студента должны быть поля salary , rate , name
Внутри объекта также должен быть метод который на основе рейтинга возвращает сумму возможного кредита.
На основе функции создать минимум 5 студентов и имя каждого студента должно соответствовать имени студента из вашей группы.
Создать массив students и поместить в него студентов.
Написать функцию которая принимает массив студентов. И вычисляет общую сумму кредитов которую можно выдать группе.
rate имеет 4 категории A B C D
A - отличный рейтинг и мы можем дать человеку кредит как 12 его зарплат
B - хороший рейтинг и мы можем дать человеку кредит как 9 его зарплат
C - неплохой рейтинг и мы можем дать человеку кредит как 6 его зарплат
D - плохой рейтинг и мы не можем дать кредит */


/* Task 2 👨‍🏫 Тролли атакуют наш раздел с комментариями!!!
Единственный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.
Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными.
Например, строка «This website is for losers LOL!» станет "Ths wbst s fr lsrs LL!".
Примечание: для этой задачи y не считается гласной. */

const strWithoutVowels = (str) => str.replace(/[aeiouy]/gi, '')

console.log(strWithoutVowels('This website is for losers LOL!'));


/* Task 3 👨‍🏫 Нет истории, нет теории
В приведенных ниже примерах показано, как написать функцию:
    accum("abcd") -> "A-Bb-Ccc-Dddd"
    accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
    accum("cwAt") -> "C-Ww-Aaa-Tttt"
Параметр - это строка, которая включает только буквы от a..z и A..Z. */

const accum = (str) => {
    const strToArr = str.toUpperCase().split('');
    return strToArr
    .map((el, index) => el + el.toLowerCase().repeat(index))
    .join('-')
};

accum("abcd");

/* Task 4 👨‍🏫 Самый высокий и самый низкий
В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны возвращать наибольшее и наименьшее число.
    highAndLow("1 2 3 4 5"); // return "5 1"
    highAndLow("1 2 -3 4 5"); // return "5 -3"
    highAndLow("1 9 3 4 -5"); // return "9 -5"
Строка вывода должна состоять из двух чисел, разделенных одним пробелом, при этом наибольшее число должно быть первым.*/

const highAndLow = ("1 2 3 4 5");

const max = Math.max(...highAndLow.split(' '));
const min = Math.min(...highAndLow.split(' '));
const resMaxAndMin = max + ' ' + min;
console.log(resMaxAndMin);


/* Task 5 👨‍🏫 Изограммы
Изограмма - это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. 
Реализуйте функцию, которая определяет, является ли строка, содержащая только буквы, изограммой. 
Предположим, что пустая строка является изограммой. Регистр букв мы игнорируем.
    isIsogram("Dermatoglyphics") == true
    isIsogram("aba") == false
    isIsogram("moOse") == false // -- ignore letter case */

/* Task 6 👨‍🏫 Считаем коды символов
Учитывая строку, превратите каждый символ в его код символа ASCII и соедините их вместе, чтобы создать число. 
Поместите результат в переменную total1

Затем замените все числа 7 на число 1 и назовите это число total2

После верните разницу между суммой цифр total1 и total2

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667 */

/* Task 7 👨‍🏫 Дубликаты
Цель этого упражнения - преобразовать строку в новую строку, где каждый символ в новой строке равен (, 
если этот символ появляется только один раз в исходной строке, или ), если этот символ встречается более одного раза 
в исходной строке. Игнорируйте использование заглавных букв при определении дубликата символа.
    "din" => "((("
    "recede" => "()()()"
    "Success" => ")())())"
    "(( @" => "))(("
*/