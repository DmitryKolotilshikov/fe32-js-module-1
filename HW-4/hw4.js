'use strict'

//HW-4
//Normal level

//Task-1
const getSum = (number) => {
    let result = 0;

    for (let i = 0; i <= number; i++) {
        result += i;
    }

    return result;
}

//Task-2
const calculateLoanAmount = (loanSum, creditPeriod, creditProcent) => {
    let totalSum = 0;

    for (let i = 0; i < creditPeriod; i++) {
        totalSum += loanSum * (creditProcent / 100);
    }

    return totalSum;
}

console.log(calculateLoanAmount(500, 5, 17));

//Task-3
const trimString = (strParametr, indexFrom, indexTo) => {
    return String(strParametr).substring(indexFrom, indexTo);
}

console.log(trimString("HelloWorld", 1, 4));

//Task-4
const getSumNumbers = (number) => {
    const numberStr = String(number);
    let result = 0;

    for (let i = 0; i < numberStr.length; i++) {
        result += parseInt(numberStr[i]);
    }

    return result;
}

console.log(getSumNumbers(2021));

//Task-5
const getPeriodSum = (initialNum, finalNum) => {
    initialNum = parseInt(initialNum);
    finalNum = parseInt(finalNum);

    let result = 0;

    if (initialNum === finalNum) {
        return initialNum;
    }
    
    if (initialNum > finalNum) {
        return initialNum + finalNum;
    }
 
    for (let i = initialNum; i <= finalNum; i++) {
        result += i;
    }

    return result;
}

alert(getPeriodSum(1,0));
alert(getPeriodSum(1,2));
alert(getPeriodSum(0,1));
alert(getPeriodSum(1,1));
alert(getPeriodSum(-1,0));
alert(getPeriodSum(-1,2));

//Task-6
const foo = () => console.log("The weather is wonderfull today");
const boo = () => console.log("It was rainy all day");

const fooboo = (isSunnyToday, foo, boo) => {
    return isSunnyToday ? foo() : boo();
}

fooboo(true, foo, boo);
fooboo(false, foo, boo);

//Advanced Level
//Task-1
const isRectangelPossible = (a,b,c) => {
    if (a === b && a === c && b === c) {
        return true;
    }

    //захотелось экспериментов , а не просто if in if делать, читается не очень , но все для экспериментов
    return a + b > c ? (a + c > b ? ((b + c > a) ? true : false) : false) : false;
}

console.log(isRectangelPossible(3,4,10));

//Task-2
const ChockoRun = (width, height) => {
    if (width === 1 && height === 1) {
        return 0;
    }
    else {
        return (width - 1) + width * ( height - 1);
    }
}

alert(ChockoRun(5,5));

//Task-3
const phoneCalc = (accountSum) => {
    accountSum = parseFloat(accountSum);
    let totalCartPrice = 0;
    let isRunning= true;

    const tax = getTax(prompt("Choose your current region: NY -> 1 CA -> 2 NM -> 3 TX -> 4 GA -> 5 IL - 6"));
    
    while(isRunning) {
        const phonePrice = getPhonePrice(prompt("Choose phone model: 1-(Samsung s22 - 300$) 2-(iPhone SE - 499$) 3-(Huawei P50 - 250$) 4-(XIAOMI 10s - 73$)"));
        const totalDevicePrice = getTotalPrice(tax, phonePrice);

        totalCartPrice += totalDevicePrice;

        if (accountSum >= totalCartPrice) {
            alert("You can afford this purchase.");
        }
        else {
            alert(`You can't afford this purchase. Your balance is ${accountSum} while items in cart for ${totalCartPrice}`);
        }
        
        const isGoOnShopping = confirm("One more try?");

        if (!isGoOnShopping) {
            isRunning = false;
        }
    }
}

const getTax = (region) => {
    switch (region) {
        case "1": 
            return 15.9;
            break;
        case "2": 
            return 13.5;
            break;
        case "3": 
            return 10.2;
            break;
        case "4": 
            return 8.6;
            break;
        case "5": 
            return 8.9;
            break;
        case "6": 
            return 12.9;
            break;
        default: 
            return 11.5;
            break;
    }
}

const getPhonePrice = (phoneModel) => {
    switch(phoneModel){
        case "1": 
            return 300;
            break;
        case "2": 
            return 499;
            break;
        case "3": 
            return 250;
            break;
        case "4": 
            return 73;
            break;
        default: 
            return 0;
            break;
    }
}

const getTotalPrice = (tax, phonePrice) => (tax / 100 * phonePrice) + phonePrice;

phoneCalc(500);