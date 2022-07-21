// задачи из учебника 
//п.п.5.2
//задача 1. Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
const num1 = +prompt ("Введите число", '');
const num2 = +prompt ("Введите еще одно число", '');
console.log(num1 + num2);

//задача 2. Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт. Функция должна возвращать числовое значение. Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.
function readNumber () {
    let num;
    do {
        num = prompt ("Введите число", 0);
} while (!isFinite (num));
if (num === null || num === '') return null;
return +num;
}
alert (`Число: ${readNumber ()}`);


//HW_6. Task 1
//Дан массив. Выведите в консоль его длину.
const colors = ['red', 'green', 'blue'];
console.log(colors.length);

//task 2
//Дан массив. Выведите в консоль его последний элемент вне зависимости от его длинны.
const animals = ['monkey', 'dog', 'cat'];
console.log(animals.at(-1));

//task 3.1
//Дан массив. Удалите все элементы в массиве и выведите в консоль полученный результат.
const numbers = [5, 43, 63, 23, 90];
numbers.splice (0, 5);
console.log(numbers);

//task 3.2
const numbers1 = [5, 43, 63, 23, 90];
numbers.pop (5);
console.log(numbers);

//task 4
//Дан массив. Удалите последний элемент массива, затем вместо него добавьте в массив студента Borya. Удалите первый элемент массива, затем вместо него добавьте в массив студента Andrey. Полученный результат не забудьте вывести в консоль.
const students = ['Polina', 'Dasha', 'Masha'];
students [2] = 'Borya';
students [0] = 'Andrey';
console.log(students);

//task 5
// Дан массив. Выведите в консоль все элементы массива. Сначала через цикл for, затем for of.
const cats = ['Gachito', 'Tom', 'Batman'];
for (let i = 0; i < cats.length; i++) {
    console.log( cats[i] );
}
for (let cat of cats) {
    console.log( cat );
}

//task 6
// Соедините два массива чисел в один. В полученном массиве попробуйте найти индекс числа 8
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const allNumbers = evenNumbers.concat(oddNumbers);
console.log(allNumbers);
console.log(allNumbers.indexOf (8));

//task 7
//Дан массив. Наш бинарный массив неполный, в нем явно не хватает единиц. Превратите данный массив в строку. [0, 0, 0, 0] -> '0101010'
const binary = [0, 0, 0, 0];
const binary1 = binary.splice (1);
const binary2 = binary1.map((el)=>el +'1');
const newbinary = binary2.push('0');
console.log(newbinary.join (''));