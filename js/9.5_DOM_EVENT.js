const body = document.querySelector('body');
const block = document.createElement('div');

block.style.width = '300px';
block.style.height = '300px';
block.style.backgroundColor = 'lightgrey';

body.append(block);

block.addEventListener('mouseenter', () => {
    block.style.backgroundColor = 'lightblue';
})
block.addEventListener('mouseleave', () => {
    block.style.backgroundColor = 'lightgrey';
})