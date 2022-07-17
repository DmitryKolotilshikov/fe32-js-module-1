// JSON  | string {}

const obj1 = {a: 1, b: 2};
const obj2 = {a: 1, b: 2};

// obj1 === obj2      // false

obj1.toString() // '[object Object]'

// JSON.stringify

const objStr = JSON.stringify(obj1);

JSON.stringify(obj1) === JSON.stringify(obj2); // true

const parsedObj = JSON.parse(objStr)

const arr = ['a', 22, 'Hello', 999, {a: 1, b: 2}];
const arrStr = JSON.stringify(arr);

// ==========================================

// number, string, boolean, undefined, null, 
// object, bigInt, symbol

// push, pop, shift, unshift, reduce, map, filter, find,
// some, every, slice, splice, join, sort, forEach

// function expression vs function declaration (hoisting)

// IIFE - immediately invoke function expression
// (() => '')()

// const, let, var (глобальная область видимости)

// const obj3 = {a: 1, b: 2}

// obj3.a = '234' // true
// delete obj3.a  // true

// == vs ===   
// const str = '1';
// const num = 1;

// str == num;      // true
// str === num;     // false

// && and ||

// '0' && null

// number -> string
// number + '' | String(number) | `${number}` | number.toString()

// string -> number
// Number(string) | +string | parseInt(string) | parseFloat(string)

// null vs undefined 