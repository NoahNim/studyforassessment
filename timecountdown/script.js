window.addEventListener("DOMContentLoaded", (event) => {
    let selectedDate = document.getElementById("date");
    let timeForm = document.getElementById("time-form");
    let countdownEle = document.getElementById("countdown");
    let dateCounting = document.getElementById("date-counting-to")

    const countDown = (endDate) => {
        let theCountEnd = new Date(endDate)
        let second = 1000;
        let minute = second * 60;
        let hour = minute * 60;
        let day = hour * 24;
        let timer;

        localStorage.setItem('counter', theCountEnd);
        localStorage.setItem('datedown', theCountEnd);

        function timeDown() {
            let theCountStart = new Date();
            let timeDistance = theCountEnd.getTime() - theCountStart.getTime();
            let days = Math.floor(timeDistance / day);
            let hours = Math.floor((timeDistance % day) / hour);
            let minutes = Math.floor((timeDistance % hour) / minute);
            let seconds = Math.floor((timeDistance % minute) / second);

            if (timeDistance <= 0) {
                clearInterval(timer);
                countdownEle.innerHTML = "THE TIMER IS OVER CONGRATS";
                localStorage.clear();
                document.getElementById("submit").style.pointerEvents = "auto";
                document.getElementById("submit").hidden = false;
                return;
            }

            countdownEle.innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`
        }

        timer = setInterval(timeDown, 1000);
    }

    if (localStorage.getItem('counter') && localStorage.getItem('datedown')) {
        document.getElementById("submit").style.pointerEvents = "none";
        countdownEle.addEventListener("change", countDown(localStorage.getItem('counter')))
        document.getElementById("submit").style.pointerEvents = "none";
        document.getElementById("submit").hidden = true;
        countdownEle.innerHTML = localStorage.getItem('counter');
        dateCounting.innerHTML = localStorage.getItem('datedown');
    }

    timeForm.addEventListener("submit", (event) => {
        event.preventDefault();
        countdownEle.addEventListener("change", countDown(selectedDate.value));
        document.getElementById("submit").style.pointerEvents = "none";
        document.getElementById("submit").hidden = true;
        dateCounting.innerHTML = selectedDate.value;

    });
});