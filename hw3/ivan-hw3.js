'use strict';

// Task 1
// Создайте переменные и присвойте им значения:

//     'true'
//     false
//     17
//     undefined
//     null
// Затем с помощью оператора typeof выведите в консоль все типы созданных значений переменных.

// const str = 'true';
// const isFalse = false;
// const _numb = 17;
// const undef = undefined;
// const _null = null;

// console.log (typeof str);
// console.log (typeof isFalse);
// console.log (typeof _numb);
// console.log (typeof undef);
// console.log (typeof _null);


// Task 2
// Даны две переменные:

//     let height = 15
//     let width = 20
// С помощью условий выведите в консоль разработчика наибольшее число.

// const height = 15
// const width = 20

// if (height > width) {
// console.log(height);
// } else if (width > height) {
// console.log(width);
// }


// Task 3
// Написать перебор от 1 до 20, где выведутся все числа кратные трём.

// for (let i = 1; i < 20; ++i) {
//     if (i % 3 === 0) {
//       console.log(i);
//     }
//   }


// Task 4
// Нам надо идти на работу, но нужно проверить все ли мы взяли или нет?
// Нам точно нужны ключи документы и ручка, но из еды нам надо яблоко или апельсин.

// const pen = true;
// const key = true;
// const documents = true;
// const apple = false;
// const orange = true;

// if (key && document && pen && (apple || orange)) {
//   let shouldGoToWork = 'Go to work!';
//   console.log(shouldGoToWork);
// } 
// else {
//   let shouldGoToWork = 'Stay at home';
//   console.log(shouldGoToWork);
// }


// Task 5
// Запросить у пользователя число:

// 1. Если число делится без остатка на 5 выводим сообщение Fiz
// 2. Если число делится без остатка на 3 выводим сообшение Buz
// 3. Если число делится без остатка и на 3 и на 5 выводим сообшение FizBuz

// const number = prompt('Enter your number')
// if (number % 3 === 0 && number % 5 === 0) {
//   alert('FizBuz')
// } 
// else if (number % 3 === 0) {
//   alert('Buz')
// } 
// else if (number % 5 === 0) {
//   alert('Fiz')
// } 
// else { alert ('Enter another number')};


// Task 6
// Написать программу, которая выполняет следующие операции:

// Запрашивает у пользователя возраст, если он больше 18,
// то выводит сообщение - Попей пивка.
// Если меньше, то выводит сообщение - Пей колу.
// Добавить условие, что если возраст от 16-18,
// выводим сообщение - Можешь выкурить сигаретку, только маме не говори.

// const age = prompt('Введите свой возраст')
// if (age > 17) {
//       alert('Попей пивка')}
// else if (age < 16) {
//     alert('Пей колу')}
// else {
//     alert('Можешь выкурить сигаретку, только маме не говори')}


// Task 7
// Напишем программу для туристического терминала.
// Запросите у пользователя в какую сторону света он бы хотел отправиться.
// После ввода данных мы должны вывести в консоль сообщение из списка.
// Если пользователь ввел неверные данные, выведите сообщение в консоль чтобы он попробовал еще раз.

// юг на юг пойдешь счастье найдешь
// север на север пойдешь много денег найдешь
// запад на запад пойдешь верного друга найдешь
// восток на восток пойдешь разработчиком станешь

// const side = prompt('В какую сторону света желаете отправиться?')
// switch (side) {
//     case 'юг':
//       alert(`На юг пойдешь счастье найдешь`)
//       break;

//     case 'север':
//       alert(`На север пойдешь много денег найдешь`)
//       break;

//     case 'запад':
//       alert(`На запад пойдешь верного друга найдешь`)
//       break;

//     case 'восток':
//       alert(`На восток пойдешь разработчиком станешь`)
//       break;
      
//     default:
//       alert(`попробуйте еще раз`)
//       break;  
// }
