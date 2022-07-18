'use strict';

// Task 1 💻
// Создайте переменные и присвойте им значения:
// Затем с помощью оператора typeof выведите в консоль все типы созданных значений переменных.

const a1 = 'true';
const b1 = false;
const c1 = 17;
const d1 = undefined;
const e1 = null;

console.log('Task 1 result:',typeof a1, typeof b1, typeof c1, typeof d1, typeof e1);

// Task 2 💻
// Даны две переменные:
//     let height = 15
//     let width = 20
// С помощью условий выведите в консоль разработчика наибольшее число.

const height = 15
const width = 20

console.log('Task 2 result:', Math.max(height, width));

// Task 3 💻
// Написать перебор от 1 до 20, где выведутся все числа кратные трём.
// Для вычисления кратности обратите внимание на оператор %

for (let i = 1; i <= 20; ++i) {
	if ( i % 3 === 0) {
		console.log('Task 3:', i);
	}
}

// Task 4 💻
// Нам надо идти на работу, но нужно проверить все ли мы взяли или нет? Нам точно нужны ключи документы и ручка, но из еды нам надо яблоко или апельсин. Для решения этой задачи нам помогут логические операторы || &&.
// Ответ поместите в переменную shouldGoToWork

const key = true;
const documents = true;
const pen = true;
const apple = false;
const orange = true;

if (key && documents && pen && (apple || orange)) {
	const shouldGoToWork = "Let's go!";
	console.log('Task 4:', shouldGoToWork)}
	else {
		const shouldGoToWork = "Check if you have taken everything?";
		console.log('Task 4:', shouldGoToWork)}

// Task 5 💻
// Запросить у пользователя число:
// 1. Если число делится без остатка на 5 выводим сообщение Fiz
// 2. Если число делится без остатка на 3 выводим сообшение Buz
// 3. Если число делится без остатка и на 3 и на 5 выводим сообшение FizBuz

const numb = prompt('Введите число:');
const firstCondition = numb % 5 == 0;
const secondCondition = numb % 3 == 0;

if ( firstCondition && secondCondition) { console.log("Task 5: FizBuz"), alert("FizBuz")}
else if (firstCondition) { console.log("Task 5: Fiz"), alert("Fiz")}
else if ( secondCondition) { console.log('Task 5: Buz'), allert('Buz')}
else { console.log("Task 5: Число не делится без остатка ни на 3, ни на 5"), alert("Число не делится без остатка ни на 3, ни на 5")};

// Task 6 💻
// Написать программу, которая выполняет следующие операции:
// Запрашивает у пользователя возраст, если он больше 18, то выводит сообщение - Попей пивка.
// Если меньше, то выводит сообщение - Пей колу.
// Добавить условие, что если возраст от 16-18, выводим сообщение - Можешь выкурить сигаретку, только маме не говори.

const age = prompt('ВВедите ваш возраст:');
if (age >= 16 && age < 18)
{console.log('Task 6: Можешь выкурить сигаретку, только маме не говори.'), alert('Можешь выкурить сигаретку, только маме не говори.')}
else if (age >= 18)
{ console.log('Task 6: Попей пивка!'), alert('Попей пивка!')}
else if (age < 16)
{ console.log('Task 6: Попей колы!'), alert('Попей колы!')};

// Task 7 💻
// Напишем программу для туристического терминала. Запросите у пользователя в какую сторону света он бы хотел отправиться. После ввода данных мы должны вывести в консоль сообщение из списка. Если пользователь ввел неверные данные, выведите сообщение в консоль чтобы он попробовал еще раз.
// юг на юг пойдешь счастье найдешь
// север на север пойдешь много денег найдешь
// запад на запад пойдешь верного друга найдешь
// восток на восток пойдешь разработчиком станешь
// Используйте конструкцию switch

const sideOfTheWorld = prompt('Введите сторону света, куда вы бы хотели отправиться(север, юг, запад или восток):');
switch (sideOfTheWorld) {
	case 'юг':
		console.log('Task 7: на юг пойдешь счастье найдешь'), alert('на юг пойдешь счастье найдешь');
		break;
	case 'север':
		console.log('Task 7: на север пойдешь много денег найдешь'), alert('на север пойдешь много денег найдешь');
		break;
	case 'запад':
		console.log('Task 7: на запад пойдешь верного друга найдешь'), alert('на запад пойдешь верного друга найдешь');
		break;
	case 'восток':
		console.log('Task 7: на восток пойдешь разработчиком станешь'), alert('на восток пойдешь разработчиком станешь');
		break;
		default:
    console.log('Task 7: Попробуйте еще раз'), alert('Попробуйте еще раз');
}

