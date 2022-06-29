//HW-3

//Task-1
const stringBoolean = "true";
const booleanValue = false;
const integerValue = 17;
const underfinedValue = undefined;
const nullValue = null;

console.log(`stringBoolean is ${typeof stringBoolean}`);
console.log(`booleanValue is ${typeof booleanValue}`);
console.log(`integerValue is ${typeof integerValue}`);
console.log(`underfinedValue is ${typeof underfinedValue}`);
console.log(`nullValue is ${typeof nullValue}`);

//Task-2
const height = 15;
const width = 20;

const result = Math.max(height, width);

console.log(result);

//Task-3
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

//Task-4
const key = true;
const documents = true;
const pen = true;
const apple = false;
const orange = true;

const shouldToGo = (key && documents && pen) && (apple || orange);

console.log(`Shall i goto work - ${shouldToGo}`);

//Task-5
const userNumber = prompt("Enter your number: ");

if (userNumber % 5 === 0 && userNumber % 3 === 0) {
    console.log("FizBuz");
}
else if (userNumber % 5 === 0) {
    console.log("Fiz");
}
else if (userNumber % 3 === 0) {
    console.log("Buz");
}

//Task-6
const userAge = prompt("Enter your age: ");

if (userAge > 16 && userAge < 18) {
    console.log("Don't tell your mom about smoking :-)");
}
else if (userAge < 18) {
    console.log("Drink cola!");
}
else if (userAge >= 18) {
    console.log("Beer.....");
}

//Task-7
const worldSide = prompt("Enter world side such as -> N W S E").toLowerCase();

switch(worldSide) {
    case "n":
        console.log("Go north you will find a lot of money");
        break;
    case "w":
        console.log("Go west you will find a true friend");
        break;
    case "e":
        console.log("Go east and become a developer");
        break;
    case "s":
        console.log("Go south you will find happiness");
        break; 
    default:
        console.log("Please try again...");   
        break;
}


//Advanced level
//Task-1
let usersInput = 'пОлИнА нАбЕрЕжНаЯ';
let response = usersInput.toLowerCase().trim();
let string = String();

for (let item = 0; item < response.length; item++) {
   if (item == 0) {
       string += response[item].toUpperCase();
   }
   else if ((response[item] === " " || response[item] === "-") && item + 1 < response.length - 1) {
       string += response[item];
       string += response[item + 1].toUpperCase();

       response = response.replace(response[item+1],'');
   }
   else {
       string += response[item];
   }
}

// Была предусмотрена возможность того , что пользователь может ввести разные имена (Хасан Бен-Ладан или Натали Дормер)
// чтобы программа корректно реагировала на все кейсы.
alert(string);

//Task-2
let isRunning = true;
let variable = Number();

while (isRunning) {
    variable = parseFloat(prompt("Enter your variable:"));

    const variableForDiff = parseFloat(prompt("Enter how much you want to subtract: "));
    const variableForSum = parseFloat(prompt("Enter how much you want to add: "));
    const multiplyVariable = parseFloat(prompt("Enter how much you want to multiply: "));
    const divideVariable = parseFloat(prompt("Enter how much you want to divide: "));

    const result = ((((variable - variableForDiff) + variableForSum) * multiplyVariable) / divideVariable);

    alert(`((((${variable} - ${variableForDiff}) + ${variableForSum}) * ${multiplyVariable}) / ${divideVariable}) = ${result}`);

    isRunning = confirm("Once again?!");
}

//Task-3
const userSize = parseInt(prompt("Enter figure size: "));

let iterator =  userSize;
let myString = "";

for (let i = 0; i < userSize; i++) {
    for (let j = iterator; j > 0; j--) {
       myString+="*";
    }

    console.log(myString);

    iterator--;
    myString="";
}