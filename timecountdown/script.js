window.addEventListener("DOMContentLoaded", (event) => {
    let selectedDate = document.getElementById("date");
    let timeForm = document.getElementById("time-form");
    let countdownEle = document.getElementById("countdown");

    const countDown = (endDate) => {
        let theCountEnd = new Date(endDate)
        let second = 1000;
        let minute = second * 60;
        let hour = minute * 60;
        let day = hour * 24;
        let timer;


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
                return;
            }

            countdownEle.innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`
        }

        timer = setInterval(timeDown, 1000);
    }

    timeForm.addEventListener("submit", (event) => {
        event.preventDefault();
        countdownEle.addEventListener("change", countDown(selectedDate.value));
    });
});