window.addEventListener("DOMContentLoaded", (event) => {
    let selectedTime = document.getElementById("time");
    let timeForm = document.getElementById("time-form");
    let countdownEle = document.getElementById("countdown");
    let theCount = '';

    timeForm.addEventListener("submit", (event) => {
        event.preventDefault();
        countdownEle.innerHTML = selectedTime.value;
    });
});