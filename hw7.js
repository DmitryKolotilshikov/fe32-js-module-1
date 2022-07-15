// Task 1


const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]


fibonacci.forEach(element => console.log(element))

// Task 2 


const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']

let users1 = users.map(function(user, index){
    return {[`member ${index + 1}`]: user}
})
console.log(users1)

// Task 3 


const numbers = [7, -4, 32, -90, 54, 32, -21]

let positiveNumbers = numbers.filter(function(number){
    return number > 0;
})
console.log(positiveNumbers)


// Task 4 


const fibonacci1 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

let result = fibonacci1.reduce(function(sum,current){
    return sum + current;
})

console.log(result)


// Task 5 


const numbers1 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]



