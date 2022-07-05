/*
  TASK 1 💻
  Создайте переменные и присвойте им значения:

    'true'
    false
    17
    undefined
    null

  Затем с помощью оператора typeof выведите в консоль все типы созданных значений переменных.
*/

const varToCheckType1 = 'true';
const varToCheckType2 = false;
const varToCheckType3 = 17;
const varToCheckType4 = undefined;
const varToCheckType5 = null;

console.log('TASK 1');
console.log(`Type of first (${varToCheckType1}) variable is ${typeof varToCheckType1}`);
console.log(`Type of second (${varToCheckType2}) variable is ${typeof varToCheckType2}`);
console.log(`Type of third (${varToCheckType3}) variable is ${typeof varToCheckType3}`);
console.log(`Type of fourth (${varToCheckType4}) variable is ${typeof varToCheckType4}`);
console.log(`Type of (${varToCheckType5}) fifth variable is ${typeof varToCheckType5}`);

/*
  ==================================
*/


/*
  TASK 2
  Даны две переменные:

    let height = 15
    let width = 20

  С помощью условий выведите в консоль разработчика наибольшее число.
*/

const height = 15;
const width = 20;

console.log('TASK 2');

if(height > width) {
  console.log(`Height (${height}) is bigger than width (${width})`)
} else if(height < width) {
  console.log(`Width (${width}) is bigger than height (${height})`)
} else {
  console.log(`Width (${width}) is equal to height (${height})`)
}

/*
  ==================================
*/


/*
  TASK 3
  Написать перебор от 1 до 20, где выведутся все числа кратные трём.
  Для вычисления кратности обратите внимание на оператор %
*/

console.log('TASK 3');

for (let i = 0; i <= 20; i++) {
  if (i % 3 || i === 0) {
    continue;
  }
  console.log(`This number ${i} is multiple of three`);
}

/*
  ==================================
*/


/*
  TASK 4
  Нам надо идти на работу, но нужно проверить все ли мы взяли или нет? Нам точно нужны ключи документы и ручка, но из еды нам надо яблоко или апельсин. Для решения этой задачи нам помогут логические операторы || &&.

    let key = true
    let documents = true
    let pen = true
    let apple = false
    let orange = true

  Ответ поместите в переменную shouldGoToWork
*/

const key = true;
const documents = true;
const pen = true;
const apple = false;
const orange = true;

const shouldGoToWork = (key && documents && pen && (apple || orange));

console.log('TASK 4');
if (shouldGoToWork) {
  console.log('You can go to work');
} else {
  console.log('You forgot something');
}

/*
  ==================================
*/


/*
  TASK 5
  Запросить у пользователя число:

    1. Если число делится без остатка на 5 выводим сообщение Fiz
    2. Если число делится без остатка на 3 выводим сообшение Buz
    3. Если число делится без остатка и на 3 и на 5 выводим сообшение FizBuz
*/

const requestedNumber = prompt('Enter your number');

console.log('TASK 5');

if (requestedNumber % 5 === 0 && requestedNumber % 3 === 0 && requestedNumber > 0) {
  console.log(`FizBuz`);
} else if (requestedNumber % 5 === 0 && requestedNumber > 0) {
  console.log(`Fiz`);
} else if (requestedNumber % 3 === 0 && requestedNumber > 0) {
  console.log(`Buz`);
} else {
  console.log('Your number is not multiple of tree or(and) five')
}

/*
  ==================================
*/


/*
  TASK 6
  Написать программу, которая выполняет следующие операции:

  Запрашивает у пользователя возраст, если он больше 18, то выводит сообщение - Попей пивка.
  Если меньше, то выводит сообщение - Пей колу.
  Добавить условие, что если возраст от 16-18, выводим сообщение - Можешь выкурить сигаретку, только маме не говори.
*/

const userAge = prompt('Enter your age');

console.log('TASK 6');

if (userAge > 18) {
  console.log('Попей пивка.');
} else if (userAge <= 18 && userAge > 0) {
  console.log('Пей колу.');
}  else {
  console.log('ERROR!!!');
}

if(userAge >= 16 && userAge <= 18) {
  console.log('Можешь выкурить сигаретку, только маме не говори.');
}

/*
  ==================================
*/


/*
  TASK 7
  Напишем программу для туристического терминала. Запросите у пользователя в какую сторону света
  он бы хотел отправиться. После ввода данных мы должны вывести в консоль сообщение из списка.
  Если пользователь ввел неверные данные, выведите сообщение в консоль чтобы он попробовал еще раз.

    юг на юг пойдешь счастье найдешь
    север на север пойдешь много денег найдешь
    запад на запад пойдешь верного друга найдешь
    восток на восток пойдешь разработчиком станешь

  Используйте конструкцию switch
*/

const userDirection = prompt('Enter your direction').toLowerCase();

console.log('TASK 6');

switch (userDirection) {
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
    console.log('Попробуй еще раз');
}

/*
  ==================================
*/


/*
  ADVANCED TASK 1
  Пользователь решил повеселиться и ввел свое имя в таком ввиде 'пОлИнА нАбЕрЕжНаЯ'
  Испрвьте эту ситацию чтобы мы смогли корректно поприветсвовать пользователя, и поприветствуйте его через alert

    Привет, Полина Набережная!
*/

const userName = 'пОлИнА нАбЕрЕжНаЯ';

console.log('ADVANCED TASK 1');
console.log(`привет, ${userName}`.toLowerCase().split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' '));

alert(`привет, ${userName}`.toLowerCase().split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' '));

/*
  ==================================
*/


/*
  ADVANCED TASK 2
  Написать программу, которая выполняет следующие операции:

    Запрашивает у пользователя число.
    Последовательно задает вопрос: cколько отнять / прибавить / умножить / разделить от предыдущего результата?
    По окончании вывести пользователю alert, содержащий формулу и результат например:
  ((((6 - 10) + 5) * 20) / 2 = 110)
*/

console.log('ADVANCED TASK 2');

const mainNumber = Number(prompt('Введите число'));
const numberToSubtract = Number(prompt('Cколько отнять'));
const numberToAdd = Number(prompt('Cколько прибавить'));
const numberToMultiply = Number(prompt('Cколько умножить'));
const numberToDevide = Number(prompt('Cколько разделить'));

console.log(`(((${mainNumber} - ${numberToSubtract}) + ${numberToAdd}) * ${numberToMultiply}) / ${numberToDevide} = ${(((mainNumber - numberToSubtract) + numberToAdd) * numberToMultiply) / numberToDevide}`);

alert(`(((${mainNumber} - ${numberToSubtract}) + ${numberToAdd}) * ${numberToMultiply}) / ${numberToDevide} = ${(((mainNumber - numberToSubtract) + numberToAdd) * numberToMultiply) / numberToDevide}`);

/*
  ==================================
*/


/*
  ADVANCED TASK 3
  Написать программу, которая будет выводить в консоль лесенку.

    #
    ##
    ###
    ####
    #####
    ######
  Не забудьте вопспользоваться циклами
*/

console.log('ADVANCED TASK 3');

for(let i = 0; i <= 6; i++) {

  if(i === 0) {
    continue;
  }

  console.log(`#`.repeat(i));
}

/*
  ==================================
*/