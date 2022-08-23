console.log('start');

setTimeout(console.log, 0, 'setTimeout'); // macro task

const p = new Promise(resolve => resolve('Promise easy works!'))
p.then(response => console.log(response)) // micro task

console.log('end');
