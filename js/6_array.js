console.log('6_array.js');
// Array - массивы
// Массив - это особый тип объекта, предназначеный для работы с упорядоченным набором элементов

const array = [1, 2, 3, 4, 5];
// console.log(array[0]);

const anyValuesArray = [0, 'cat', null, {}, []];

// const newArray = new Array(1, 2, 3, 4, 5, 6, 7);
// console.log(newArray.length);

array[0] = 99;
array[70] = 'hello';
array[100] = '1000';
// console.log(array);

const arr1 = [1,2,3];
const arr2 = arr1;
// console.log(arr1 === arr2); // true

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

// console.log(matrix[0][1]);

// ===========================================

// Cycles | for, for of, forEach

const carArray = ['ford', 'opel', 'bmw', 'audi', 'tesla'];
const newCar1 = ['bugatti'];
const newCar2 = ['vw'];

carArray.length // значение ровно 5

// for (let i = 0; i < carArray.length; i++) {
//     console.log('Car is ', carArray[i]);
// };

// FOR IN только для обьектов !!!
// FOR OF только для массивов !!!

// for (const value of carArray) {
//     console.log('Car is ', value);
// }

// carArray.forEach((element, index, thisArray) => {
    // console.log('Car is:', element, '|index: ', index);
    // console.log(thisArray);
// });

Array.isArray(carArray);

const cars = carArray.concat(newCar1, newCar2); // concat объединяет массивы

// push - кладет новые элементы в конец массива
cars.push('toyota'); 
cars.push('hummer', 'mercedes');

// unshift - кладет элемент вначало массива (не рекомендуется из производительности)

cars.unshift('fiat');

// pop and shift - удаляют элементы

// cars.pop(); // удаляет (извлекает) элемент с конца и возвращает его
// cars.shift(); // удаляет (извлекает) элемент с начала и возвращает его

// let lastElement = cars.pop();
// console.log(`Был удален последний элемент: ${lastElement}`);
// lastElement = cars.pop();
// console.log(`Был удален последний элемент: ${lastElement}`);

// let firstElement = cars.shift();
// console.log(`Был удален первый элемент: ${firstElement}`);

cars.slice(0,3);  // slice создает новый массив

const newSlicedCars = cars.slice(0,3);

// console.log('cars: ', cars);
// console.log('newSlicedCars: ', newSlicedCars);

// SLICE ==================================

// console.log(cars.slice(3)); // оставляет всё начиная с индекса 3
// console.log(cars.slice(3, cars.length-1)); // оставляет всё начиная с индекса 3

// console.log(cars.slice(3, -1)); // оставляет всё начиная с индекса 3 и удаляет один элемент с конца
// console.log(cars.slice(-3)); // оставляет 3 последних элемента

// SPLICE  ================================

// cars.splice(0, 3); // мутирует исходный массив и возвращает удаленные элементы

const deletedCarsElements = cars.splice(0, 3);

cars.splice(0, 0, 'hello world'); // добавляем новый элемент
// console.log('cars: ', cars);

// indexOf, lastIndexOf ============================

cars.indexOf('audi') // возвращает индекс элемента иначе -1

cars.push('audi');
cars.lastIndexOf('audi') // возвращает последний индекс найденого элемента иначе -1

// findIndex, find, includes ======================== 

const carIndex = cars.findIndex((el) => el === 'tesla');
// console.log('carIndex: ', carIndex);

const carElement = cars.find((el) => el === 'tesla');
// console.log('carElement: ', carElement);

// const carIncludes = cars.includes('tesla'); // возвращает true если элемент найден, либо false если элемент не найден
// console.log('carIncludes: ', carIncludes);

// reverse, join, split ==============================

cars.reverse() // reverse разворачивает массив

// cars.join(', ') // преобразует массив в строку
// cars.split(', ') // преобразует строку в массив

// filter, map ====================================

const filteredCars1 = cars.filter((el) => el.startsWith('a')); // filter фильрует массив и возвращает новый массив, но не мутирует исходный массив. Т.е исходный массив остается в исходном виде
// console.log(filteredCars1);

const filteredCars2 = cars.filter((el) => el.includes('a'));
// console.log(filteredCars2);

const arrayOfNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
const newArrayOfNumber1 = arrayOfNumber.filter((el) => el % 3 === 0);
// console.log(newArrayOfNumber1);

const newArrayOfNumber2 = arrayOfNumber.map((el) => el * 10);
// console.log(newArrayOfNumber2);

const newArrayOfNumber3 = arrayOfNumber
                  .map((el) => el % 2 === 0 ? el * 10 : el);
// console.log(newArrayOfNumber3);

const newArrayOfNumber4 = arrayOfNumber
                  .map((el, index) => el + `: ${index}`);
console.log(newArrayOfNumber4);


// sort, some, every, reduce =======================

