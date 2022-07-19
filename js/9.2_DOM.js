'use strict';

const h1 = document.querySelector('#head-1');
const wrapper = document.querySelector('.wrapper');
const ulElement = wrapper.querySelector('ul');

// console.log(h1.textContent)
// console.log(h1.innerText) // innerText не рекомендуется использовать, вместо него используй textContent
// console.log(h1.innerHTML)

// console.log(wrapper.innerHTML)
// console.log(wrapper.outerHTML)

// wrapper.innerHTML = `<h2>hello from wrapper</h2>`;
wrapper.innerHTML += `<h2>hello from wrapper</h2>`;

// h1.style.backgroundColor = 'lightGrey';
// h1.style.color = 'orange';
// h1.style.cssText = `background-color: lightGrey; color: orange`

h1.classList.add('decor');

setTimeout(() => {
    h1.classList.remove('decor');
}, 3000)

// h1.setAttribute('title', 'ЭТО ЗАГОЛОВОК ПЕРВОГО УРОВНЯ');
// h1.getAttribute('title')
