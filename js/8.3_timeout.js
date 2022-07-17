// setTimeout & setInterval

// setTimeout

// setTimeout(() => {
//     alert('Hello setTimeout')
// }, 3000)

// const timeId = setTimeout(() => {
//     alert('Hello setTimeout')
// }, 3000)

// console.log(timeId)
// clearTimeout(timeId)

const greet = (who, text) => console.log(`${who} said ${text}`);

// setTimeout(greet, 1500, 'Cat', 'Myay Myay');

// ==========================================

// setInterval

let count = 0;
// const timerId = setInterval(() => {
//     console.log(count)
//     count++;
// }, 1000)

// setTimeout(()=> {
//     clearInterval(timerId);
// }, 5000)

// let timeId = setTimeout(function fn() {
//     if (count < 3) {
//         timeId = setTimeout(fn, 1000);
//     }
//     count++;
//     console.log(count);
// }, 1000);

console.log('Start');

setTimeout(() => {
    console.log('setTimeout'); // Event loop
}, 0)

console.log('End');

// =======================================
