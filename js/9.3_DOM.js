const root = document.querySelector('#root');

const p = document.createElement('p');
p.textContent = `Hello my little world!`;
p.classList.add('decor');
root.append(p); // добавляет в конец

const div = document.createElement('div');
const divContent = document.createTextNode('this is div');

// div.textContent = divContent;  // [object text]
div.textContent = divContent.data; // everything is ok

root.append(div);

const link = document.createElement('a'); 
link.href = '/';
link.textContent = 'click me';

root.prepend(link) // добавляет в начало

const section1 = document.createElement('section');
const section2 = document.createElement('section');
section1.innerHTML = `<p>Section with content 1</p>`;
section2.innerHTML = `<p>Section with content 2</p>`;

root.before(section1);
root.after(section2);

const section3 = document.createElement('section');
section3.innerHTML = `<p>Section with content 3</p>`;

// root.insertAdjacentElement('afterbegin', section3); // внутри вначале
// root.insertAdjacentElement('afterend', section3); // снаружи после
// root.insertAdjacentElement('beforeend', section3); // внутри после
root.insertAdjacentElement('beforebegin', section3); // снаружи перед


// root.remove() // remove - удаляет весь элемент целиком
// root.removeChild(root.firstChild) // remove - удаляет весь элемент целиком
// root.removeChild(root.children[1]) 

// const section4 = document.createElement('section');
// section4.innerHTML = `<p>Section with content 4</p>`;
// root.replaceChild(section4, root.firstChild)


// appendChild() // не рекомендуется использовать, т.к append более универсальный и популярный