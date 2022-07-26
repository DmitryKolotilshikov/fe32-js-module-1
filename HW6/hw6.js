// NORMAL level
// Task 1 🖥
// Дан массив:
// Выведите в консоль его длину.
const colors = ['red', 'green', 'blue'];
console.log(colors.length);

// Task 2 🖥
// Дан массив:
// Выведите в консоль его последний элемент вне зависимости от его длинны.
let animals = ['monkey', 'dog', 'cat'];
let lastElement = animals.pop();
console.log(lastElement);

let animals2 = ['monkey', 'dog', 'cat'];
let lastElement2 = animals2.slice(-1);
console.log(lastElement);

let animals3 = ['monkey', 'dog', 'cat'];
let lastElement3 = animals[animals3.length-1];
console.log(lastElement);


// Task 3 🖥
// Дан массив:
// Удалите все элементы в массиве и выведите в консоль полученный результат.
// Реализуйте решение двумя способами.
let numbers = [5, 43, 63, 23, 90];
numbers = [];
console.log(numbers);

const numbers2 = [5, 43, 63, 23, 90];
numbers2.length = 0;
console.log(numbers2);


// Task 4 🖥
// Дан массив:
// Удалите последний элемент массива, затем вместо него добавьте в массив студента Borya.
// Удалите первый элемент массива, затем вместо него добавьте в массив студента Andrey.
// Полученный результат не забудьте вывести в консоль.

const students = ['Polina', 'Dasha', 'Masha'];
delete students[2];
console.log(students)
students.pop();
console.log(students);
students.push('Borya');
console.log(students);

students.shift();
console.log(students);
students.unshift('Andrey');
console.log(students);

// Task 5 🖥
// Дан массив:
// Выведите в консоль все элементы массива. Сначала через цикл for, затем for of.
const cats = ['Gachito', 'Tom', 'Batman'];
for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}

const cats2 = ['Gachito', 'Tom', 'Batman'];
for (const value in cats2) {
    console.log(value)
};

// Task 6 🖥
// Соедините два массива чисел в один.
// В полученном массиве попробуйте найти индекс числа 8

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const newArray = [evenNumbers.concat(oddNumbers)];
console.log(newArray);
console.log(newArray.indexOf(4));


// Task 7 🖥
// Дан массив:
// Наш бинарный массив неполный, в нем явно не хватает единиц.
// Превратите данный массив в строку.
// [0, 0, 0, 0] -> '0101010'
const binary = [0, 0, 0, 0];
const newBinary = binary.map((Element) => Element + '1');
console.log(binary.join('1'));



// ADVANCED level
// Для решения задач используйте циклы for или for of

// Task 1 👨‍🏫
// Реализуйте функцию которая будет проверять, является ли слово палиндромом.

// Task 2 👨‍🏫
//     const matrix = [
//         [12, 98, 78, 65, 23],
//         [54, 76, 98, 43, 65],
//         [13, 324, 65, 312],
//         [9092, 22, 45, 90000],
//     ]
// Выведите в консоль среднее значение чисел в многомерном массиве.

// Task 3 👨‍🏫
// Дан массив:

//    const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
// Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные. Оба массива затем выведите в консоль.

// Task 4 👨‍🏫
// Создать массив длинной не менее 5, из динамически созданных случайных чисел. Далее написать алгоритм который берет все числа из исходного массива, возводит их в куб и записывает в новый массив. В конце вывести оба массива в консоль.