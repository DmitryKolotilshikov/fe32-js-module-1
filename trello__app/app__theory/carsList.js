import { $, $addEvent, $class } from "./utils.js";

const carsList = $('[data-cars-list]');

let selected_li = [];

const carsListHandler = (e) => {
    const el = e.target;

    if (el.tagName !== 'LI') return;

    if(e.ctrlKey || e.metaKey) {
        multiSelect(el);
    } else {
        singleSelect(el);
    }

    function multiSelect(li) {
        $class(li, 'selected');
        selected_li.push(li);
    }

    function singleSelect(li) {
        // const selected = carsList.querySelectorAll('.selected');
        selected_li.forEach(elem => {
            $class(elem, 'selected');
        })
        selected_li = [];

        $class(li, 'selected');
        selected_li.push(li);
    }
}

$addEvent(carsList, 'click', carsListHandler)
