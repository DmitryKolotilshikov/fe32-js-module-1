const button = document.querySelector('.btn');

// button.onclick = () => console.log('click 1'); // так тоже не нужно добавлять события

// button.onclick = () => console.log('click 2'); // событие перезатрет первое событие 

// const clickHandler = () => console.log('click');

// button.addEventListener('click', clickHandler)
// setTimeout(() => {
//     button.removeEventListener('click', clickHandler)
// }, 5000)

// button.addEventListener('click', (event) => {
//     console.dir(event.target);
// })

const root = document.querySelector('#root');
const input = document.querySelector('.input-field');

// input.addEventListener('input', (event) => {
//     p.textContent = event.target.value;
//     input.insertAdjacentElement('afterend', p);

//     console.dir(event.target.value)
// })

button.addEventListener('click', () => {
    const p = document.createElement('p');
    if (input.value.trim()) {
        p.textContent = input.value.trim();
        root.append(p);
    }
    // input.insertAdjacentElement('afterend', p);
    input.value = '';
});

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();
    
    console.log(link.href)
})