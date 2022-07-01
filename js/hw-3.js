'use strict';

/* Task 1 
Создайте переменные и присвойте им значения:

'true'
false
17
undefined
null

Затем с помощью оператора typeof выведите в консоль все типы созданных значений переменных. */

const isTrue = 'true';
const isFalse = false;
const is17 = 17;
const isValue = undefined;
const isNull = null;

console.log (typeof isTrue);
console.log (typeof isFalse);
console.log (typeof is17);
console.log (typeof isValue);
console.log (typeof isNull);

/* Task 2
Даны две переменные:

    let height = 15
    let width = 20

С помощью условий выведите в консоль разработчика наибольшее число. */

const height = 15;
const width = 20;
console.log(Math.max(height, width));

/* Task 3
Написать перебор от 1 до 20, где выведутся все числа кратные трём.

Для вычисления кратности обратите внимание на оператор % */

for (let i=0; i<=20; i++) {
   if (i % 3 != 0) continue;
   alert(i);
}

/* Task 4
Нам надо идти на работу, но нужно проверить все ли мы взяли или нет? Нам точно нужны ключи документы и ручка, 
но из еды нам надо яблоко или апельсин. Для решения этой задачи нам помогут логические операторы || &&.

    let key = true
    let documents = true
    let pen = true
    let apple = false
    let orange = true
Ответ поместите в переменную shouldGoToWork */ 

const key = true;
const documents = true;
const pen = true;
const apple = false;
const orange = true;

if (key && documents && pen && (apple || orange)) {
   const shouldGoToWork = "Go to work";
   console.log(shouldGoToWork);
} else {
   const shouldGoToWork = "Stay at home";
   console.log(shouldGoToWork);
}

/* Task 5
Запросить у пользователя число:

1. Если число делится без остатка на 5 выводим сообщение Fiz
2. Если число делится без остатка на 3 выводим сообшение Buz
3. Если число делится без остатка и на 3 и на 5 выводим сообшение FizBuz */

const userNumber = prompt ('Введите число');

if (userNumber % 3 == 0 && userNumber % 5 == 0) {
      console.log ('FizBuz')
} else if (userNumber % 3 == 0) {
      console.log('Buz');
}
if (num % 5 == 0) {
      console.log('Fiz');
}


/* Task 6
Написать программу, которая выполняет следующие операции:

Запрашивает у пользователя возраст, если он больше 18, то выводит сообщение - Попей пивка.
Если меньше, то выводит сообщение - Пей колу.
Добавить условие, что если возраст от 16-18, выводим сообщение - Можешь выкурить сигаретку, только маме не говори.*/

const userAge = prompt ('Введите ваш возраст');

if (userAge < 18) {
   alert ('Пей колу');
} else if (userAge > 18) {
   alert ('Попей пивка');
}
if (userAge >=16 && userAge <=18) {
   alert ('Можешь выкурить сигаретку, только маме не говори');
}


/* Task 7 💻
Напишем программу для туристического терминала. Запросите у пользователя в какую сторону света он бы хотел отправиться. 
После ввода данных мы должны вывести в консоль сообщение из списка. Если пользователь ввел неверные данные, 
выведите сообщение в консоль чтобы он попробовал еще раз.

юг на юг пойдешь счастье найдешь
север на север пойдешь много денег найдешь
запад на запад пойдешь верного друга найдешь
восток на восток пойдешь разработчиком станешь
Используйте конструкцию switch */

const travel = prompt('Выберите сторону света');
switch (travel) {
case 'юг':
   console.log('на юг пойдешь счастье найдешь');
   break;
case 'север':
   console.log('на север пойдешь много денег найдешь');
   break;
case 'запад':
   console.log('на запад пойдешь верного друга найдешь');
   break;
case 'восток':
   console.log('на восток пойдешь разработчиком станешь');
   break;
default:
      alert(`Попробуйте еще раз`)
         break;
}

//ADVANCED level


/* Task 1
Пользователь решил повеселиться и ввел свое имя в таком ввиде 'пОлИнА нАбЕрЕжНаЯ'

Исправьте эту ситацию чтобы мы смогли корректно поприветсвовать пользователя, и поприветствуйте его через alert

Привет, Полина Набережная! */

const userName = 'пОлИнА нАбЕрЕжНаЯ';
const userNameLowerCase = userName.toLowerCase();
const nameAlert = userNameLowerCase[0].toUpperCase() + userNameLowerCase.slice(1,7) + userNameLowerCase[7].toUpperCase() + userNameLowerCase.slice(8,17)

alert (`Привет, ${nameAlert}!`)

/* Task 2
Написать программу, которая выполняет следующие операции:

Запрашивает у пользователя число.
Последовательно задает вопрос: cколько отнять / прибавить / умножить / разделить от предыдущего результата?
По окончании вывести пользователю alert, содержащий формулу и результат например:
((((6 - 10) + 5) * 20) / 2 = 110) */

const userNumber = prompt ('Введите число');

const userNumberMinus = prompt ('Сколько отнять?');
const userNumberPlus = prompt ('Сколько прибавить?');
const userNumberMultiply = prompt ('На сколько умножить?');
const userNumberDivide = prompt ('На сколько разделить?');
const result = ((((userNumber - userNumberMinus ) + userNumberPlus ) * userNumberMultiply ) / userNumberDivide);

alert (`Ваша формула (((${userNumber} - ${userNumberMinus}) + ${userNumberPlus}) * ${userNumberMultiply}) / ${userNumberDivide}= ${result}`);

/* Task 3
Написать программу, которая будет выводить в консоль лесенку.

    #
    ##
    ###
    ####
    #####
    ######
Не забудьте вопспользоваться циклами */

let stairs = '#';
while (stairs.length<=7) {
   console.log(stairs);
   stairs +="#";
}