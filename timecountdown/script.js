window.addEventListener("DOMContentLoaded", (event) => {
    let selectedDate = document.getElementById("date");
    let timeForm = document.getElementById("time-form");
    let countdownEle = document.getElementById("countdown");
 
    const countDown = (endDate) => {
        let theCountEnd = new Date(endDate)
        let theCountStart = new Date();
        console.log('SUBMITTED DATE: ', theCountEnd);
        console.log('CURRENT TIME: ', theCountStart);
        let timeDistance = theCountEnd.getTime() - theCountStart.getTime();
        console.log(timeDistance);
        let second = 1000;
        let minute = second * 60;
        let hour = minute * 60;
        let day = hour * 24;
        let timer;

        if (timeDistance < 0) {
            clearInterval(timer);
            countdownEle.innerHTML = "THE TIMER IS OVER CONGRATS";
            return;
        }

        function showRemainingTime() {
            let days = Math.floor(timeDistance / day);
            let hours = Math.floor((timeDistance % day) / hour);
            let minutes = Math.floor((timeDistance % hour) / minute);
            let seconds = Math.floor((timeDistance % minute) / second);

            countdownEle.innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`
        }
        timer = setInterval(showRemainingTime, 1000);
    }

    timeForm.addEventListener("submit", (event) => {
        event.preventDefault();
        // countdownEle.innerHTML = selectedTime.value;
        countDown(selectedDate.value);
    });
});