'use strict';

// Task 1 💻
// Написать функцию getSum, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем.
// Если передадим число 100 то, надо вычислить сумму чисел от 0 до 100 (должно получится 5050)

function getSum(num) {
	let res = 0;

	for(let i = 0; i <= num; i++) {
		res +=i;
		console.log('res:', res);
	}
	return res;
}

getSum(10);

// Task 2 💻
// Напишите функцию которая в качестве аргумента принимает в себя сумму кредита который хочет получить клиент и верните результат переплаты по кредиту:
// процентная ставка в год — 17%,
// количество лет — 5.
// Мы пишем функцию для хорошего банка, поэтому сумма кредита не увеличивается.

const sumCredit = (sum) => {
	const years = 5;
	const percentYear = (17 / 100) * sum;
	const overPayment = years * percentYear;
	return overPayment;
}
console.log(sumCredit(1000));

// Task 3 💻
// Написать функцию trimString которая в качестве аргумента принимает три параметра:
// строку
// значение от
// значение по
// После вызова функция должна вернуть переданную строку обрезанную по значениям от и по

function trimString (row, from, by) {
	return row.slice(from, by);
}

console.log(trimString('Frontend', 5, 8));

// Task 4 💻
// Написать функцию getSumNumbers, которая будет принимать число и вычислять сумму цифр из которых состоит число.
// Для 2021 это будет 5.

const getSumNumbers = (num) => {
	const res  = String(num);
	const resLength = res.length;
	let sum = 0;
	
	for (let i = 0; i < resLength; i++) {
		 sum += Number(res[i]);
	}
	return sum;
}

console.log(getSumNumbers(2021));

// Task 5 💻
// Написать функцию getSum которая принимает два целых числа a и b, которые могут быть положительными или отрицательными, найти сумму всех чисел между ними, включая их, и вернуть ее. Если два числа равны, верните a или b.

function getSum(a, b) {
	let result = 0;
	if (a === b) {
		return a;
	}
	if (a > b){
		for (let i = b; i <= a; i++) {
			result += i;
		 }
	}
	if (a < b){
		for (let i = a; i <= b; i++) {
	  result += i;
		}
	}
	return (result)
 }
 console.log(getSum(9, 20))

//  Task 6 💻
// Напишите функцию fooboo которая принимает в качестве аргумента три параметра:
// булевое значение
// функцию foo которая выводит в консоль свое имя
// функцию boo которая выводит в консоль свое имя
// Если переданное булевое значение true запускаем функцию foo иначе boo

function fooBoo(boolean, foo, boo){
	foo = () => console.log('foo');
	boo = () => console.log('boo');
	if (boolean === true){
		foo();
	}
	else {
		boo();
	}
}
console.log(fooBoo(true));

// ADVANCED level

// Task 1 👨‍🏫
// Реализуйте функцию, который принимает 3 целочисленных значения a, b, c. Функция должна возвращать true, если треугольник можно построить со сторонами заданной длины, и false в любом другом случае.

function checkIsTriangle(a, b, c) {
	if (a + b > c && a + c > b && b + c > a) {
		console.log('true');
	}
	else { console.log('false')
	}
}

checkIsTriangle(1, 2 , 3)


// Task 3 👨‍🏫
// Напишите программу для вычисления общей стоимости покупки телефонов. Вы будете продолжать покупать телефоны (подсказка: циклы!), пока у вас не закончатся деньги на банковском счете. Вы также будете покупать аксессуары для каждого из телефонов.

const buyPhone = (bankAccount) => {
	const phonePrice = 1000;
	const tax = phonePrice * 20 / 100;
	const accessories = 50;

	const priceOfOnePhone = phonePrice + tax + accessories;

	let amount = 0;
	let sum = 0;
	while(bankAccount >= priceOfOnePhone) {
		bankAccount -= priceOfOnePhone;
		 sum += priceOfOnePhone;
		 amount++;
	}
	let accountBalanceAfter = bankAccount;
	return `Сумма покупки: ${sum}$; кол-во: (${amount}шт), остаток на счете: ${accountBalanceAfter}`;
}

console.log(buyPhone(4000));
