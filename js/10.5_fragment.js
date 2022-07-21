const list = document.getElementById('list');

// const generateListItems = () => {
//     const fragment = new DocumentFragment(); // фрагмент - это отсутствие родителя
//     // const fragment = document.createElement('div');

//     for (let i = 1; i <= 15; i++) {
//         const li = document.createElement('li');
//         li.textContent = i;
//         fragment.append(li);
//     }

//     return fragment;
// }

const generateListItems = () => {
    const elements = [];

    for (let i = 1; i <= 15; i++) {
        const li = document.createElement('li');
        li.textContent = i;
        elements.push(li);
    }

    return elements;
}

list.append(...generateListItems());