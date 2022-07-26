const btnAdd = document.querySelector('.add');
const btnClear = document.querySelector('.clear');
const carsContainer = document.querySelector('[data-cars-list]');

const LOCAL_STORAGE_KEY = 'carsList';

const cars = getElementsFromLocalStorage() ?? [
    {id: 1, model: 'Ford', year: 3000},
    {id: 2, model: 'Volvo', year: 4000},
    {id: 3, model: 'Mazda', year: 2022},
];

btnAdd.addEventListener('click', () => {
    const newCar = {
        id: cars.length + 1, // Date.now()
        model: prompt('enter car model', 'Ferrari'),
        year: prompt('enter car year', 2077)
    };
    cars.push(newCar);

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cars))
    showElementsFromStorage();
    render();
});

btnClear.addEventListener('click', () => {
    // localStorage.clear() // удалить всё
    localStorage.removeItem(LOCAL_STORAGE_KEY); // удалить по ключу
    showElementsFromStorage();
});

function showElementsFromStorage() {
    const carsList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    console.dir(carsList);
}

function appendElements() {
    const carsList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    if (carsList) {
        carsList.forEach(el => {
            const p = document.createElement('p');
            p.insertAdjacentHTML('beforeend', `
                <span>Model: ${el.model} | Year:${el.year}</span>
            `);
            carsContainer.append(p);
        })
    }
}

function getElementsFromLocalStorage() {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
}

function clearElements() {
    carsContainer.innerHTML = '';
}

function render() {
    clearElements();
    appendElements();
}

render();