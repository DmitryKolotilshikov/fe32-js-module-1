/* Task 1 💻
Создайте переменные и присвойте им значения:
Затем с помощью оператора typeof выведите в консоль все типы созданных значений переменных. */

const isTrue = "true";
const isFalse = false;
const num = 17;
const someValue = undefined;
const zeroValue = null;

console.log(typeof isTrue);
console.log(typeof isFalse);
console.log(typeof num); 
console.log(typeof someValue); 
console.log(typeof zeroValue);


/* Task 2 💻
Даны две переменные:
С помощью условий выведите в консоль разработчика наибольшее число. */

const height = 15;
const width = 20;

if (width > height) {
  console.log(width)
} else {
  console.log(height)
}


/* Task 3 💻
Написать перебор от 1 до 20, где выведутся все числа кратные трём.
Для вычисления кратности обратите внимание на оператор % */

for (let i = 1 ; i < 20 ; i++ ) {
    if(i % 3 === 0) {
    console.log(i);
    }
}


/* Task 4 💻
Нам надо идти на работу, но нужно проверить все ли мы взяли или нет? 
Нам точно нужны ключи документы и ручка, но из еды нам надо яблоко или апельсин. 
Для решения этой задачи нам помогут логические операторы || &&.
Ответ поместите в переменную shouldGoToWork */

const key = true;
const documents = true;
const pen = true;
const apple = false;
const orange = true;

if (key && documents && pen && (apple || orange)) {
    const shouldGoToWork = "Можем идти!";
    console.log(shouldGoToWork);
} else {
    const shouldGoToWork = "Не готов!";
    console.log(shouldGoToWork);
}


/* Task 5 💻
Запросить у пользователя число:
1. Если число делится без остатка на 5 выводим сообщение Fiz
2. Если число делится без остатка на 3 выводим сообшение Buz
3. Если число делится без остатка и на 3 и на 5 выводим сообшение FizBuz */

const anyNumber = prompt('Введите число');
const check_1 = (anyNumber / 3) === 0;
const check_2 = (anyNumber / 5) === 0;


if (check_1 && check_2) {
  alert('FizBuz')
} else if (check_1) {
  alert('Buz')
} else if (check_2) {
  alert('Fiz')
}


/* 
Task 6 💻
Написать программу, которая выполняет следующие операции:

Запрашивает у пользователя возраст, если он больше 18, то выводит сообщение - Попей пивка.
Если меньше, то выводит сообщение - Пей колу.
Добавить условие, что если возраст от 16-18, выводим сообщение - Можешь выкурить сигаретку, только маме не говори. */

const age = prompt('Enter your age');

if (age >= 18) {
    alert('Попей пивка')
} else {
    alert('Пей колу')
}
if (age >= 16 && age <= 18) {
    alert('Можешь выкурить сигаретку, только маме не говори')
}


/* Task 7 💻
Напишем программу для туристического терминала. 
Запросите у пользователя в какую сторону света он бы хотел отправиться. 
После ввода данных мы должны вывести в консоль сообщение из списка. 
Если пользователь ввел неверные данные, выведите сообщение в консоль чтобы он попробовал еще раз.

юг на юг пойдешь счастье найдешь
север на север пойдешь много денег найдешь
запад на запад пойдешь верного друга найдешь
восток на восток пойдешь разработчиком станешь
Используйте конструкцию switch */

const direction = prompt('В какую сторону света вы бы хотели отправиться?')

switch (direction) {
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
