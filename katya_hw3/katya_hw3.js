// Task 1 💻
// Создайте переменные и присвойте им значения:

//     'true'
//     false
//     17
//     undefined
//     null
// Затем с помощью оператора typeof выведите в консоль все типы созданных значений переменных.

const isTrue = true;
const isFalse = false;
const isNum = 17;
const notValue = undefined;
const isNull = null;

console.log(typeof isTrue);
console.log(typeof isFalse);
console.log(typeof isNum);
console.log(typeof notValue);
console.log(typeof isNull);

// Task 2 💻
// Даны две переменные:

//     let height = 15
//     let width = 20
// С помощью условий выведите в консоль разработчика наибольшее число.

const height = 15;
const width = 20;

console.log(Math.max(height, width));

// Task 3 💻
// Написать перебор от 1 до 20, где выведутся все числа кратные трём.

// Для вычисления кратности обратите внимание на оператор %

let counter = 0;

for (let i = 0; i <= 20; i++) {
  let x = i % 3;
  if (x == 0) {
    counter++;
  }
}

console.log("Result: " + counter);

// Task 4 💻
// Нам надо идти на работу, но нужно проверить все ли мы взяли или нет? Нам точно нужны ключи документы и ручка, но из еды нам надо яблоко или апельсин. Для решения этой задачи нам помогут логические операторы || &&.

//     let key = true
//     let documents = true
//     let pen = true
//     let apple = false
//     let orange = true
// Ответ поместите в переменную shouldGoToWork

const key = true;
const documents = true;
const pen = true;
const apple = false;
const orange = true;

const shouldGoToWork = key && documents && pen && (apple || orange);
console.log(shouldGoToWork);

// Task 5 💻
// Запросить у пользователя число:

// 1. Если число делится без остатка на 5 выводим сообщение Fiz
// 2. Если число делится без остатка на 3 выводим сообшение Buz
// 3. Если число делится без остатка и на 3 и на 5 выводим сообшение FizBuz

const enterNumber = prompt("Enter your number:");

const x = enterNumber % 5;
const y = enterNumber % 3;

if (x === 0 && y === 0) {
  console.log("FizBuz");
} else if (x === 0) {
  console.log("Fiz");
} else if (y === 0) {
  console.log("Buz");
}

// Task 6 💻
// Написать программу, которая выполняет следующие операции:

// Запрашивает у пользователя возраст, если он больше 18, то выводит сообщение - Попей пивка.
// Если меньше, то выводит сообщение - Пей колу.
// Добавить условие, что если возраст от 16-18, выводим сообщение - Можешь выкурить сигаретку, только маме не говори.

const enterAge = prompt("Enter your age:");

if (enterAge >16 && enterAge < 18) {
    console.log("Можешь выкурить сигаретку, только маме не говори.");
  } else if (enterAge >= 18) {
    console.log("Попей пивка.");
  } else if (enterAge < 18) {
    console.log("Пей колу.");
  }

// Task 7 💻
// Напишем программу для туристического терминала. Запросите у пользователя в какую сторону света он бы хотел отправиться. После ввода данных мы должны вывести в консоль сообщение из списка. Если пользователь ввел неверные данные, выведите сообщение в консоль чтобы он попробовал еще раз.

// юг на юг пойдешь счастье найдешь
// север на север пойдешь много денег найдешь
// запад на запад пойдешь верного друга найдешь
// восток на восток пойдешь разработчиком станешь
// Используйте конструкцию switch

    const enterYourWay = prompt('Enter your way:');

    switch (enterYourWay) {
        case 'юг':
            console.log ('на юг пойдешь счастье найдешь');
            break;
        
        case 'север':
            console.log ('на север пойдешь много денег найдешь');
            break;

        case 'запад':
            console.log ('на запад пойдешь верного друга найдешь');
            break;

        case 'восток':
            console.log ('на восток пойдешь разработчиком станешь');
            break;
    
        default:
            console.log ('попробуй ещё раз');
            break;
    }


