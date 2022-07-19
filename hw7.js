// Task 1

//Выведи все элементы массива в консоль с помощью метода forEach

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]


fibonacci.forEach(element => console.log(element))

// Task 2 

//Используя метод map создайте новый массив, на основе массива users, в котором каждый элемент массива будет содержать строку вида:

//['member 1: Darya', 'member 2: Masha', ... etc]

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']

let users1 = users.map(function(user, index){
    return {[`member ${index + 1}`]: user}
})
console.log(users1)

// Task 3 

//С помощью метода filter создайте новый массив в котором не будет отрицательных чисел.

const numbers = [7, -4, 32, -90, 54, 32, -21]

let positiveNumbers = numbers.filter(function(number){
    return number > 0;
})
console.log(positiveNumbers)


// Task 4 

//Используя метод reduce получите сумму всех чисел массива.

const fibonacci1 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

let result = fibonacci1.reduce(function(sum,current){
    return sum + current;
})

console.log(result)


// Task 5 

//Используя метод find найдите в массиве первое четное число.

const numbers1 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]



