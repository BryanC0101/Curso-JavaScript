// const hours = document.getElementById("hour")
// const minutes = document.getElementById("minute")
// const seconds = document.getElementById("second")

let timer;
let active = true
num = 1
sec = 0
min = 0
hr = 0

function verificaZero(n, tempo) {
    if (n < 10) {
        tempo.innerHTML = `0${n}`;
    }else {
        tempo.innerHTML = n
    }
        
}

function start() {
    const cronos = document.querySelector(".time");
    cronos.style.color = "black"    

    const hours = document.getElementById("hour")
    const minutes = document.getElementById("minute")
    const seconds = document.getElementById("second")

    if (active === true) {
        active = false
        timer = setInterval(() => {
            sec += 1;

            if (sec > 59) {
                sec = 0;
                min += 1;
            }

            if (min > 59) {
                min = 0;
                hr += 1;

                seconds.innerText = sec;
                minutes.innerText = min;
                hours.innerText = hr;
            }
            verificaZero(sec, seconds);
            verificaZero(min, minutes);
            verificaZero(hr, hours);
        }, 1000);
    }
}

function pause() {
    active = true
    const cronos = document.querySelector(".time");
    cronos.style.color = "red"
    clearInterval(timer);
}

function clearTimer() {
    active = true
    const cronos = document.querySelector(".time");
    cronos.style.color = "black"   
    const hours = document.getElementById("hour")
    const minutes = document.getElementById("minute")
    const seconds = document.getElementById("second")
    clearInterval(timer);
    sec = 0
    min = 0
    hr = 0
    seconds.innerText = 0;
    minutes.innerText = 0;
    hours.innerText = 0;
    verificaZero(sec, seconds);
    verificaZero(min, minutes);
    verificaZero(hr, hours);
}
