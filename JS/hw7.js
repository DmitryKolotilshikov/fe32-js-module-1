'use strict';

// NORMAL level
// Task 1 🖥
// Выведи все элементы массива в консоль с помощью метода forEach
// Реализуйте решение двумя способами, используя function declaration & arrow function

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

fibonacci.forEach(element => console.log('1: ', element));

fibonacci.forEach(function callBack(element) {
  console.log('2: ', element);
});

// Task 2 🖥
// Используя метод map создайте новый массив, на основе массива users, в котором каждый элемент массива будет содержать строку вида:

// ['member 1: Darya', 'member 2: Masha', ... etc]
// Реализуйте решение двумя способами, используя function declaration & arrow function.

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

const userList = users.map((value, index) => 'member ' +( index + 1) +": " + value);

console.log(userList);

const userList2 = users.map(function(value, index) {
  return ('member '+ (index + 1) + ': ' + value );
});
console.log(userList2);

// Task 3 🖥
// С помощью метода filter создайте новый массив в котором не будет отрицательных чисел.
// Реализуйте решение двумя способами, используя function declaration & arrow function.

const numbers = [7, -4, 32, -90, 54, 32, -21];

const plusNumbers = numbers.filter((element) => element >= 0);
console.log(plusNumbers);

const plusNumbers2 = numbers.filter(function(element) {
  return element >= 0;
});

console.log( plusNumbers2 );

// Task 4 🖥
// Используя метод reduce получите сумму всех чисел массива.
// Реализуйте решение двумя способами, используя function declaration & arrow function.

const fib = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

const sumFib = fib.reduce(function(a, b) {
	return a + b;
 });
console.log(sumFib);

const sumFib2 = fib.reduce((a, b) => a + b);
console.log(sumFib2);

// Task 5 🖥
// Используя метод find найдите в массиве первое четное число.
// Реализуйте решение двумя способами, используя function declaration & arrow function.

const numbersArr = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

const evenNumber = numbersArr.find((item)=> item % 2 == 0);

console.log(evenNumber);

const evenNumber2 = numbersArr.find(function(item) {
	return item % 2 ==0;
});
console.log(evenNumber2);

// ADVANCED level

// Task 2 👨‍🏫 Тролли атакуют наш раздел с комментариями!!!
// Единственный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.
// Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными.
// Например, строка «This website is for losers LOL!» станет "Ths wbst s fr lsrs LL!".
// Примечание: для этой задачи y не считается гласной.

const withoutVowels = (str) => str.replace(/[aeiou]/gi, '')

console.log(withoutVowels('This website is for losers LOL!'));

// Task 3 👨‍🏫 Нет истории, нет теории
// В приведенных ниже примерах показано, как написать функцию:
//     accum("abcd") -> "A-Bb-Ccc-Dddd"
//     accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//     accum("cwAt") -> "C-Ww-Aaa-Tttt"
// Параметр - это строка, которая включает только буквы от a..z и A..Z.

const accum = str => str
  .split('')
  .map((ch, i) => (ch = ch.toLowerCase().repeat(i + 1)) && ch.charAt(0).toUpperCase() + ch.slice(1))
  .join('-');

console.log(accum("abcd")); 
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));   

// Task 4 👨‍🏫 Самый высокий и самый низкий
// В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны возвращать наибольшее и наименьшее число.
//     highAndLow("1 2 3 4 5"); // return "5 1"
//     highAndLow("1 2 -3 4 5"); // return "5 -3"
//     highAndLow("1 9 3 4 -5"); // return "9 -5"
// Строка вывода должна состоять из двух чисел, разделенных одним пробелом, при этом наибольшее число должно быть первым.

function highAndLow(num){
	num = num.split(" ");
	return Math.max(...num) +" "+ Math.min(...num);
 };

 console.log(highAndLow("1 2 3 4 5"));
 console.log(highAndLow("1 2 -3 4 5"));
 console.log(highAndLow("1 9 3 4 -5"));