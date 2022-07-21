const person = document.getElementById('person');

console.log(person.dataset)
console.log(person.dataset.info)

person.dataset.age = '20';
person.dataset.skills = 'html: 5, css: 7, js: 9';

delete person.dataset.age;

console.log('skills' in person.dataset);
console.log('age' in person.dataset);

// =======================================

const buttons = document.querySelectorAll('[data-modal]');
let modal;

buttons.forEach(el => {
    el.addEventListener('click', () => {
        if (modal) modal.classList.remove('show');

        const modalId = el.dataset.modal;
        modal = document.getElementById(modalId);
        modal.classList.add('show');
    })
})