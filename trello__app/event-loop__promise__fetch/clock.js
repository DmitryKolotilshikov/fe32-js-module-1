const clock = document.querySelector('[data-clock]');
const btnStart = document.querySelector('[data-btn-start]');
const btnStop = document.querySelector('[data-btn-stop]');

let timerID;

const updateClock = () => {
    const currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    const b = clock.children;

    b[0].textContent = hours;
    b[1].textContent = minutes;
    b[2].textContent = seconds;
}

btnStart.addEventListener('click', () => {
    updateClock();
    timerID = setInterval(updateClock, 1000);
});
btnStop.addEventListener('click', () => {
    clearInterval(timerID);
    timerID = null;
});


