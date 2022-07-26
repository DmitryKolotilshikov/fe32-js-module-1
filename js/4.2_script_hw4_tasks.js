const getSumNumbers = (num) => {
    // let sum = 0;
    // let temp = 0;
    let res = 0;
    let temp = 0;

    while(num) {
        temp = num % 10;
        num = (num - temp) / 10;
        res += temp; // res = res + temp
        console.log('temp: ', temp, 'num: ', num, 'res: ', res);
    }

    return res;
}


const getSumNumbers1 = (num) => {
    // return num + ''
    // return String(num)
    // return `${num}`
    const res  = String(num);
    const resLength = res.length;
    let sum = 0;
    
    for (let i = 0; i < resLength; i++) {
        sum += Number(res[i]);
    }

    return sum;
}

// console.log(getSumNumbers1(2021));
// console.log(getSumNumbers1(202111111));

// console.log(getSumNumbers(2021));
// console.log(getSumNumbers(123));


const buyPhone = (balance) => {
    const phonePrice = 1000;
    const tax = 100;
    const phoneCase = 50;

    const priceOfOnePhone = phonePrice + tax + phoneCase;

    let count = 0;
    let sum = 0;

    while(balance >= priceOfOnePhone) {
        balance -= priceOfOnePhone;
        sum += priceOfOnePhone;
        count++;
    }
    
    return `Сумма покупки: ${sum}$; кол-во: (${count}шт)`;
}

console.log(buyPhone(4000));