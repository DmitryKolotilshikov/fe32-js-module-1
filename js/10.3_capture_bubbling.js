const parent = document.querySelector('.parent');
const child = parent.querySelector('.child');
const grandChild = child.querySelector('.grandchild');

// parent.addEventListener('click', () => alert('parent'));
// child.addEventListener('click', () => alert('child'));
// grandChild.addEventListener('click', () => alert('grandChild'));

// grandChild.addEventListener('click', (event) => {
//     event.stopPropagation(); // предотвратить всплытие и погружение
//     alert('grandChild');
// });

const allElements = document.querySelectorAll('*');

for (const elem of allElements) {
    elem.addEventListener('click', () => {
        alert(`Погружение ${elem.tagName}`);
    }, { capture: true }); // true - Это погружение, по умолчанию установлено false

    elem.addEventListener('click', () => {
        alert(`Всплытие ${elem.tagName}`);
    })
}

// ==============================================
