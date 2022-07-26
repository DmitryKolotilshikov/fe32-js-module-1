console.log('11.1_data_attr.js');

const buttons = document.querySelectorAll('[data-counter]');

buttons.forEach((el) => {
    el.addEventListener('click', cb);

    function cb(event) {
       event.target.value++;
       console.dir(event.target) // элемент на котором произошло событие
       console.dir(event.currentTarget) // элемент на который навешено событие
    }
});

const header = document.querySelector('[data-title-main]');

header.insertAdjacentHTML("beforeend", `
    <span>
    ${header.dataset.titleMain}${header.dataset.title2}
    </span>
`)
// header.append(' ', header.dataset.titleMain, ' ', header.dataset.title2)
console.dir(header.dataset);