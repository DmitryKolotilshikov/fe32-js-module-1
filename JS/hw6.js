'use strict';

// NORMAL level

// Task 1 🖥
// Дан массив:
// Выведите в консоль его длину.


const colors = ['red', 'green', 'blue'];

console.log(colors.length);

// Task 2 🖥
// Дан массив:
// Выведите в консоль его последний элемент вне зависимости от его длинны.

const animals = ['monkey', 'dog', 'cat'];

console.log(animals.at(-1));
console.log(animals.pop());

// Task 3 🖥
// Дан массив:
// Удалите все элементы в массиве и выведите в консоль полученный результат.

// Реализуйте решение двумя способами.

const numbers = [5, 43, 63, 23, 90];

console.log(numbers.splice(0));
numbers.length = 0;
console.log(numbers);

// Task 4 🖥
// Дан массив:
// Удалите последний элемент массива, затем вместо него добавьте в массив студента Borya.
// Удалите первый элемент массива, затем вместо него добавьте в массив студента Andrey.
// Полученный результат не забудьте вывести в консоль.

const students = ['Polina', 'Dasha', 'Masha'];

students.splice(-1, 1, 'Borya');
console.log(students);

students.splice(0, 1, 'Andrey');
console.log(students);

// Task 5 🖥
// Дан массив:
// Выведите в консоль все элементы массива. Сначала через цикл for, затем for of.

const cats = ['Gachito', 'Tom', 'Batman']

for (let i = 0; i < cats.length; i++ ) {
	console.log( cats[i] );
}

for (let cat of cats) {
	console.log(cat);}

// 	Task 6 🖥
// Соедините два массива чисел в один.
// В полученном массиве попробуйте найти индекс числа 8

const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]

const newNumbers = evenNumbers.concat(oddNumbers);
console.log(newNumbers);
console.log(newNumbers.indexOf(8));

// Task 7 🖥
// Дан массив:
// const binary = [0, 0, 0, 0]
// Наш бинарный массив неполный, в нем явно не хватает единиц.
// Превратите данный массив в строку.
// [0, 0, 0, 0] -> '0101010'

const binary = [0, 0, 0, 0];
const binaryString = binary.join('1');
console.log(binaryString);

// ADVANCED level
// Для решения задач используйте циклы for или for of

// Task 3 👨‍🏫
// Дан массив:
// Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные. Оба массива затем выведите в консоль.


const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]

const plusNumbers = mixedNumbers.filter ((element) => element >= 0);
console.log(plusNumbers);

const minusNumbers = mixedNumbers.filter ((element) => element < 0);
console.log(minusNumbers);
