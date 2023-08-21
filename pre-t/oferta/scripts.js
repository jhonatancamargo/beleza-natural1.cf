// tempo
var TEMPO_TOTAL_SEGUNDOS = 0.25 * 60 * 60; // 3 hours in seconds
var timer = TEMPO_TOTAL_SEGUNDOS;

function updateTimer() {
    var hours = parseInt(timer / 3600, 10);
    var minutes = parseInt((timer % 3600) / 60, 10);
    var seconds = parseInt(timer % 60, 10);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.querySelector('.time').innerHTML = hours + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + minutes + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + seconds;

    if (--timer < 0) {
        clearInterval(interval);
        document.querySelector('.time').textContent = "00:00:00";
    }
}

updateTimer(); // Initialize immediately to avoid delay

var interval = setInterval(updateTimer, 1000);

// carrossel
const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;
const slideWidth = img[0].clientWidth;

function carrossel() {
    idx++;

    imgs.style.transition = "transform 0.5s ease-in-out"; // Smooth transition
    imgs.style.transform = `translateX(${-idx * slideWidth}px)`;

    if (idx >= img.length) {
        setTimeout(() => {
            idx = 0;
            imgs.style.transition = "none"; // Turn off transition for an instant jump
            imgs.style.transform = `translateX(${-idx * slideWidth}px)`;
            setTimeout(() => {
                imgs.style.transition = "transform 0.5s ease-in-out"; // Re-enable transition
            }, 10); // Add a small delay before re-enabling the transition
        }, 500); // Delay before wrapping to the first image
    }
}

setInterval(carrossel, 3000); // Adjust the interval as needed


