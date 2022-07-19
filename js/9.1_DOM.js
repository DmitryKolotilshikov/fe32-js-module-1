// const h1 = document.getElementById('head-1');
// const p = document.getElementsByTagName('p'); // pseudo array
// Array.from(p) // create normal array
// console.log(p);
// console.log(p[1]);
// const spans = document.getElementsByClassName('span');
// console.log(spans[1]);

const h1 = document.querySelector('#head-1');
// console.dir(h1);
const p = document.querySelectorAll('p');
// p.forEach(el => {
//     console.dir(el.innerHTML)
// })
console.log(h1)
const wrapper = document.querySelector('.wrapper');
const ulElement = wrapper.querySelector('ul');

// NodeList - text, HTMLELements...
// HTMLCollection - only HTMLElements

// wrapper.childNodes
// wrapper.children
// wrapper.children[0].children[2]
// wrapper.children[0].children[2].textContent

// ulElement.firstChild
// ulElement.firstElementChild
// ulElement.lastChild
// ulElement.lastElementChild
// ulElement.children[1]


// ulElement.nextElementSibling
// wrapper.previousElementSibling
// wrapper.nextElementSibling

// wrapper.parentElement
// wrapper.parentNode
// wrapper.parentElement.parentElement