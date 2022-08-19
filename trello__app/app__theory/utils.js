export const $ = (selector) => document.querySelector(selector);

export const $addEvent = (element, eventType, callback) => {
    element.addEventListener(eventType, callback);
}

export const $class = (element, cls = '') => {
    if (element.classList.contains(cls)) {
        element.classList.remove(cls);
    } else {
        element.classList.add(cls);
    }
}