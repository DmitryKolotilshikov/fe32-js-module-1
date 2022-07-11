// Task 1
// Дан массив:
// const colors = ['red', 'green', 'blue']
// Выведите в консоль его длину.

const colors = ['red', 'green', 'blue'];
console.log(colors.length);


// Task 2 
// Дан массив:
// const animals = ['monkey', 'dog', 'cat']
// Выведите в консоль его последний элемент вне зависимости от его длинны.

const animals = ['monkey', 'dog', 'cat'];
console.log(animals[2]);


// Task 3
// Дан массив:
// const numbers = [5, 43, 63, 23, 90]
// Удалите все элементы в массиве и выведите в консоль полученный результат.

const numbers = [5, 43, 63, 23, 90];
numbers.splice(0,4);

console.log(numbers);


// Task 4 
// Дан массив:
// const students = ['Polina', 'Dasha', 'Masha']
// Удалите последний элемент массива, затем вместо него добавьте в массив студента Borya.
// Удалите первый элемент массива, затем вместо него добавьте в массив студента Andrey.
// Полученный результат не забудьте вывести в консоль.

const students = ['Polina', 'Dasha', 'Masha'];

let lastName = students.pop();
students.push('Borya');

let firstName = students.shift();
students.unshift('Andrey');

console.log(students);


// Task 5 
// Дан массив:
// const cats = ['Gachito', 'Tom', 'Batman']
// Выведите в консоль все элементы массива.Сначала через цикл for, затем for of.

const cats = ['Gachito', 'Tom', 'Batman'];
for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
};

const cats = ['Gachito', 'Tom', 'Batman'];
for (const value of cats) {
    console.log(value);
};


// Task 6 
// const evenNumbers = [2, 4, 6, 8, 10]
// const oddNumbers = [1, 3, 5, 7, 9]
// Соедините два массива чисел в один.
// В полученном массиве попробуйте найти индекс числа 8.

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

const Numbers = evenNumbers.concat(oddNumbers);
console.log(Numbers);
console.log(Numbers.indexOf(8));