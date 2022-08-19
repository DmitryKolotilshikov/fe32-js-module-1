let todos = getFromStorage('todos') || [];

const getFromStorage = (key) => JSON.parse(localStorage.getItem(key)); // null или объект
const setStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));

const storage = (key = '', data = '') => {
    if (key && data) {
        localStorage.setItem(key, JSON.stringify(data))
    } else if (key) {
        return JSON.parse(localStorage.getItem(key));
    }
    return null;
}