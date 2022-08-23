const p1 = new Promise((resolve, reject) => {
    if (true) {
        resolve('Promise resolved! :)');
    } else {
        reject(new Error('Promise rejected! :('));
    }
});

// Promise (работа с асинхронным кодом)

// 3 состояния: pending, fulfilled, rejected
// pending -> value = undefined
// fulfilled -> value = my value
// rejected -> value = error

// console.log(p1);

p1
  .then((response) => console.log(response))
  .catch((error) => console.error(error))
  .finally(() => console.log('promise final'))

Promise.resolve(console.log('Promise easy works!'))


// --------------------------------------

// Why Promise?

const ROUTE = 'https://jsonplaceholder.typicode.com/users/'

// fetch(ROUTE + 10)
//   .then(response => response.json())
//   .then(json => console.log(json))

const getUser1 = (userID) => {
    const p = new Promise((resolve, reject) => {
        fetch(ROUTE + userID)
            .then((response) => {
                if (response.ok) {
                    resolve(response.json())
                } else {
                    reject(new Error('Something went wrong! :('))
                }
            })
    });

    return p;
}

// const p2 = getUser1(10);
// p2
//  .then(response => console.log(response))
//  .catch(error => console.error(error))

// --------------------------------------------------

// async function getUser2(userID) {}

// Асинхронная функция всегда возвращает промис (Promise)

let currentUser = {};

const getUserAPI = async (userID) => {
    const response = await fetch(ROUTE + userID);
    if (response.ok) {
        const user = await response.json();
        return user;
    } else {
        throw new Error('Something went wrong! :(');
    }
}
// getUserAPI(10)
//     .then(user => console.log(user))
//     .catch(err => console.error(err))

const fetcher = async (callback) => {
    currentUser = await callback();
    console.log(currentUser);
}

fetcher(() => getUserAPI(10));
// console.log(currentUser);

// -------------------------------------------
// IIFE - immediately invoke function expression

(async () => {
    const response1 = await fetch(ROUTE + 1);
    const user1 = await response1.json();
    document.body.insertAdjacentHTML('beforeend', `
        <div>
            <h3>${user1.name}</h3>
            <p>${user1.email}</p>
        </div>
    `);

    const response2 = await fetch(ROUTE + 2);
    const user2 = await response2.json();
    document.body.insertAdjacentHTML('beforeend', `
        <div>
            <h3>${user2.name}</h3>
            <p>${user2.email}</p>
        </div>
    `);

    const response3 = await fetch(ROUTE + 3);
    const user3 = await response3.json();
    document.body.insertAdjacentHTML('beforeend', `
        <div>
            <h3>${user3.name}</h3>
            <p>${user3.email}</p>
        </div>
    `);
})()