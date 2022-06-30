// Task 1 
// Создайте переменные и присвойте им значения:
const variableBolleanTrue = true;
const variableBolleanFalse = false;
const variableNum = 17;
const variableUndefiend = undefined;
const variableNull = null;
console.log(typeof(variableBolleanTrue));
console.log(typeof(variableBolleanFalse));
console.log(typeof(variableNum));
console.log(typeof(variableUndefiend));
console.log(typeof(variableNull));


// Task 2
// С помощью условий выведите в консоль разработчика наибольшее число.
const height = 15;
const width = 20;
if (height > width) {
  console.log(height)
} else {
  console.log(width)
}


// Task3 Написать перебор от 1 до 20, где выведутся все числа кратные трём.
for (let i = 0; i <= 20; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}


// Task4 Нам надо идти на работу, но нужно проверить все ли мы взяли или нет ? Нам точно нужны ключи документы и ручка, но из еды нам надо яблоко или апельсин.Для решения этой задачи нам помогут логические операторы || && .
let key = true
let documents = true
let pen = true
let apple = false
let orange = true

if (key && documents && pen && (apple || orange)) {
  let shouldGoToWork = 'Ты готов к работе!';
  console.log(shouldGoToWork);
} else {
  let shouldGoToWork = 'Ты не готов к работе!';
  console.log(shouldGoToWork);
}


// Task5 Запросить у пользователя число:

const number = prompt('Введите число')
if (number % 3 == 0 && number % 5 == 0) {
  alert('FizBuz')
} else if (number % 3 == 0) {
  alert('Buz')
} else if (number % 5 == 0) {
  alert('Fiz')
};


/* Task6 Написать программу, которая выполняет следующие операции:
  Запрашивает у пользователя возраст, если он больше 18, то выводит сообщение - Попей пивка.
Если меньше, то выводит сообщение - Пей колу.
Добавить условие, что если возраст от 16 - 18, выводим сообщение - Можешь выкурить сигаретку, только маме не говори. */
const userName = prompt('Как тебя зовут?')
const userAge = prompt('Сколько Вам лет?')
if (userAge >= 18) {
  alert(`${ userName }, можешь попить пивка!`)
}
if (userAge < 18) {
  alert(`${ userName }, попей Колу!`)
}
if (userAge >= 16 && userAge < 18) {
  alert(`${ userName }, можешь выкурить сигаретку, только маме не говори`)
}

// Таск7 Напишем программу для туристического терминала.Запросите у пользователя в какую сторону света он бы хотел отправиться.После ввода данных мы должны вывести в консоль сообщение из списка.Если пользователь ввел неверные данные, выведите сообщение в консоль чтобы он попробовал еще раз.
const userNameTur = prompt('Как Вас зовут?')
const userTrevel = prompt('В какую сторону света Вы бы хотели отправиться?')
switch (userTrevel) {
  case 'юг':
    alert(`${userNameTur}, на юг пойдешь счастье найдешь `)
    break;
  case 'север':
    alert(`${userNameTur}, на север пойдешь много денег найдешь `)
    break;
  case 'запад':
    alert(`${userNameTur}, на запад пойдешь верного друга найдешь `)
    break;
  case 'восток':
    alert(`${userNameTur}, на восток пойдешь разработчиком станешь`)
    break;

  default:
    alert(`${userNameTur}, попробуйте еще раз`)
    break;
}


/* ADVANCED level
Task 1
Пользователь решил повеселиться и ввел свое имя в таком ввиде 'пОлИнА нАбЕрЕжНаЯ'
Испрвьте эту ситацию чтобы мы смогли корректно поприветсвовать пользователя, и поприветствуйте его через alert
Привет, Полина Набережная! */



/* Task 2 Написать программу, которая выполняет следующие операции:
Запрашивает у пользователя число.
Последовательно задает вопрос: cколько отнять / прибавить / умножить / разделить от предыдущего результата ?
По окончании вывести пользователю alert, содержащий формулу и результат например : */
let isRunning = true;
while (isRunning) {
  const userNamber = prompt('Введите число');
  const userNumberMin = prompt('Сколько отнять от данного числа?');
  const userNumberPlu = prompt('Сколько прибывить от предыдущего результата?');
  const userNumberUmn = prompt('Сколько умножить от предыдущего результата?');
  const userNumberDel = prompt('Сколько делить от предыдущего результата?');
  const userNumRes = ((((Number(userNamber) - Number(userNumberMin)) + Number(userNumberPlu)) * Number(userNumberUmn)) / Number(userNumberDel));

  alert(`Ваша формула: (((${userNamber} - ${userNumberMin}) + ${userNumberPlu}) * ${userNumberUmn}) / ${userNumberDel}= ${userNumRes}`);

  isRunning = confirm('Хотите проолжить?')
}


/* Task 3 Написать программу, которая будет выводить в консоль лесенку. */
let line = '#';
for (let i = 0; i < 10; i++) {
  console.log(line);
  line += '#'
  console.log(line);
}