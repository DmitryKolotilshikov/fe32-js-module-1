import { $, $addEvent } from "./utils.js";

const btn = $('[data-btn]');
$addEvent(btn, 'click', () => console.log('click'));

document.addEventListener('keyup', (e) => {
    const keys = ['Space', 'Enter', 'KeyE', 'ArrowUp'];

    if (keys.includes(e.code)) {
        // alert('ВЫ МОЛОДЕЦ!')
    }
    // console.log(e.code);
})