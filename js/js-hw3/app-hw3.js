// Task 1

const a = "true";
const b = false;
const c = 17;
const d = undefined;
const e = null;

console.log(typeof a, b, c, d, e);

// Task 2

const height = 15;
const width = 20;

console.log(Math.max(height, width));

// Task 3

for (let i = 0; i <= 20; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}


// Task 4 


const key = true;
const documents = true;
const pen = true;
const apple = false;
const orange = true;

const shouldGoToWork = (key && documents && pen) && (apple || orange);

console.log (shouldGoToWork);


// Task 5


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

const userAge = prompt("Your age: ");
if(userAge >= 18){
    console.log("Пей пиво")
}
if (userAge < 18){
    console.log("Пей колу")
}
if(userAge > 16 && userAge < 18){
console.log("Можешь выкурить сигаретку, только маме не говори")
}


// Task 6 


const worldSide = prompt("Выбери сторону света: юг, север, запад, восток").toLowerCase();
switch(worldSide){
    case "юг":
        {console.log("на юг пойдешь счастье найдешь")};
        break;
    case "север":
        {console.log("на север пойдешь много денег найдешь")};
        break;
    case "запад":
        {console.log(" на запад пойдешь верного друга найдешь")};
        break;
    case "восток":
        {console.log("на восток пойдешь разработчиком станешь")};
        break;
        default:
            console.log("Повторите попытку");
            break;
}
