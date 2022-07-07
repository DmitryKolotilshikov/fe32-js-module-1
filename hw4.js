// Task 1


const person = {
    name : 'Sava',
    age : "21"
}
console.log(person)


delete person.name


console.log(person)


// Task 2

const phone = {
    model : 'iPhone',
    camera : '12px'
};


console.log('model' in phone)


// Task 3 


const student = {
    name: 'John',
    age: 19,
    isHappy: true
}
for(let key in student)

console.log(`${key}: ${student[key]}`)



// Task 4

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};

const redColor = colors ["ru pum pu ru rum"].red
const blueColor = colors ["ru pum pu ru rum"].blue

console.log(redColor)
console.log(blueColor)


// Task 5 


let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    maxim: 664,
    alexandra: 199
}

const andrey = salaries.andrey
const sveta = salaries.sveta
const anton = salaries.anton
const maxim = salaries.maxim
const alexandra = salaries.alexandra

const sum = andrey + sveta + anton + maxim + alexandra

const allSum = sum / 5


console.log(allSum)
