const table = document.querySelector('table');

console.dir(table)

// Array.from(table.rows).forEach(row => {
//     Array.from(row.cells).forEach(cell => {
//         cell.addEventListener('click', (e) => {
//             console.log(e.target.id)
//         })
//     })
// });

// for (const row of table.rows) {
//     for (const cell of row.cells) {
//         cell.addEventListener('click', (e) => {
//             console.log(e.target.id)
//         })
//     }
// }

let targetElement;

table.addEventListener('click', (e) => {
    // if(e.target.id === 'row2-col2') {
    //     console.log('УРААААА!!!! ты нажал на среднюю ячейку')
    // }
    // console.log('currentTarget: ', e.currentTarget) // элемент на который навешено событие
    // console.log('target', e.target) // элемент на который кликнул пользователь

    if (targetElement) {
        targetElement.classList.remove('bg');
    }

    targetElement = e.target;
    targetElement.classList.add('bg');

    // console.log(e.target.textContent)
});