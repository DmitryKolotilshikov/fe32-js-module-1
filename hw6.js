// Task 1 


const colors = ['red', 'green', 'blue']

console.log(colors.length)


//Task 2 


const animals = ['monkey', 'dog', 'cat']

console.log(animals.at (-1))


// Task 3 


let numbers = [5, 43, 63, 23, 90]

// numbers.length = 0;


// console.log(numbers)

numbers.shift(0,1,2,3,4)

console.log(numbers)


// Task 4 

let students = ['Polina', 'Dasha', 'Masha']

console.log(students.pop())

console.log(students)

students.push('Borya')

console.log(students)

students.shift(0)

students.unshift('Andrey')

console.log(students)


// Task 5


const cats = ['Gachito', 'Tom', 'Batman']


cats.forEach((e)=>{console.log(e)} )


// for (let i = 0 ; i < cats; i++){
//     console.log(cats[i])
// }


// Task 6


const evenNumbers = [2, 4, 6, 8, 10]

const oddNumbers = [1, 3, 5, 7, 9]

const allNumbers = evenNumbers.concat(oddNumbers)

console.log(allNumbers)


console.log(allNumbers.indexOf(8))


// Task 7


