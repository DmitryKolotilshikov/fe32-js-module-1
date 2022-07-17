// Task 1 

// Выведите в консоль его длину.

const colors = ['red', 'green', 'blue']

console.log(colors.length)


//Task 2 

// Выведите в консоль его последний элемент вне зависимости от его длинны.

const animals = ['monkey', 'dog', 'cat']

console.log(animals.at (-1))


// Task 3 

Удалите все элементы в массиве и выведите в консоль полученный результат.

let numbers = [5, 43, 63, 23, 90]

// numbers.length = 0;


// console.log(numbers)

numbers.shift(0,1,2,3,4)

console.log(numbers)


// Task 4 

//Удалите последний элемент массива, затем вместо него добавьте в массив студента Borya.
Удалите первый элемент массива, затем вместо него добавьте в массив студента Andrey.
Полученный результат не забудьте вывести в консоль.

let students = ['Polina', 'Dasha', 'Masha']

console.log(students.pop())

console.log(students)

students.push('Borya')

console.log(students)

students.shift(0)

students.unshift('Andrey')

console.log(students)


// Task 5

//Выведите в консоль все элементы массива. Сначала через цикл for, затем for of.

const cats = ['Gachito', 'Tom', 'Batman']


cats.forEach((e)=>{console.log(e)} )


// for (let i = 0 ; i < cats; i++){
//     console.log(cats[i])
// }


// Task 6

//Соедините два массива чисел в один.
В полученном массиве попробуйте найти индекс числа 8

const evenNumbers = [2, 4, 6, 8, 10]

const oddNumbers = [1, 3, 5, 7, 9]

const allNumbers = evenNumbers.concat(oddNumbers)

console.log(allNumbers)


console.log(allNumbers.indexOf(8))


// Task 7

//Наш бинарный массив неполный, в нем явно не хватает единиц.
Превратите данный массив в строку.


const binary = [0,0,0,0]

const binary1 = []

for (i=0; i < binary.length; i++){
    binary1.push(binary[i]);
    binary1.push(1);
}

console.log(binary1.toString())
