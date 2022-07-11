//HW-6
//Task-1
const colors = ['red', 'green', 'blue'];

console.log(colors.length);

//Task-2
const animals = ['monkey', 'dog', 'cat'];

const lastElement = animals[animals.length - 1];
const reverseArr = animals.reverse();
const lastElement2 = animals.pop();

console.log(lastElement);
console.log(reverseArr[0]);
console.log(lastElement2);

//Task-3
const numbers = [5, 43, 63, 23, 90];
console.log(numbers);

while(numbers.length !== 0){
    numbers.pop();
    console.log(numbers);
}

while(numbers.length !== 0){
    numbers.shift();
    console.log(numbers);
}

//Task-4
const students = ['Polina', 'Dasha', 'Masha'];

students.splice(students.length - 1, 1, "Borya");
students.splice(students[0], 1, "Andrey");

console.log(students);

//Task-5
const cats = ['Gachito', 'Tom', 'Batman'];

for(let i = 0; i < cats.length; i++){
    console.log(cats[i]);
}

for (const index of cats) {
    console.log(index);
}

//Task-6
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

const finalArr = evenNumbers.concat(oddNumbers);

console.log(finalArr);

//Task-7
const binary = [0, 0, 0, 0];

for (const iterator of binary) {
    binary.splice(binary.indexOf(iterator), 1, "01");
}

console.log(binary);

//Advanced
//Task-1

const checkFroPolindrom = (word) => {
    let regex = /[^A-Za-z0-9]/g;

    word = word.toLowerCase().replace(regex, '');

    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(checkFroPolindrom("logol"));

//Task-2
const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
];

let matrixSum = 0;
let totalElements = 0;

for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
        matrixSum += matrix[i][j];
        totalElements++;
    }
}

console.log(matrixSum / totalElements);

//Task-3
const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];

const positiveArr = [];
const negativeArr = [];

for (let index = 0; index < mixedNumbers.length; index++) {
   if (mixedNumbers[index] >= 0) {
        positiveArr.push(mixedNumbers[index]);
   } 
   else {
        negativeArr.push(mixedNumbers[index]);
   }
}

console.log(positiveArr);
console.log(negativeArr);

//Task-4
const generateArr = (arrLenth) => {
    const arr = [];

    for (let index = 0; index < arrLenth; index++) {
        arr.push(Math.floor(Math.random() * 50));
    }

    return arr;
}

const modifyArray = (array) => {
    const modifyArr = [];
    let currentElement = 0;

    for (let index = 0; index < array.length; index++) {
        currentElement = array[index];
        modifyArr.push(Math.pow(currentElement, 3));
    }

    return modifyArr;
}

const arr = generateArr(10);
const modifyArr = modifyArray(arr);

console.log(arr);
console.log(modifyArr);