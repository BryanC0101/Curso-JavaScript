// const hours = document.getElementById("hour")
// const minutes = document.getElementById("minute")
// const seconds = document.getElementById("second")

let timer;
num = 1

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
    
    

    timer = setInterval(() => {
        verificaZero(num, seconds)
        num += 1
    }, 1000);
}


function pause() {
    const cronos = document.querySelector(".time");
    clearInterval(timer);
    cronos.style.color = "red"
}

function clear() {
    const cronos = document.querySelector(".time");
    cronos.style.color = "black"
    
    const hours = document.getElementById("hour")
    const minutes = document.getElementById("minute")
    const seconds = document.getElementById("second")
    num = 0
    

    timer = setInterval(() => {
        verificaZero(num, seconds)
        num += 1
    }, 1000);
}
