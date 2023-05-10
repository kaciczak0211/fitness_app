
const text = document.getElementById('playerText')
const btn = document.querySelectorAll(".btn")

let day;

btn.forEach(button => button.addEventListener("click", () => {
    day = button.textContent;
    text.textContent = `Let's make: ${day}`

}))

// create timer
let startBtn = document.getElementById("start");
let pauseBtn = document.getElementById("pause");
let resetBtn = document.getElementById("reset");

let bgn = 0;
let interval;
let timerDisplay = document.getElementById("time");

function start(){
    let startTime = Date.now() - bgn;
    interval = setInterval(() => {
        bgn = Date.now() - startTime;
        timerDisplay(bgn);
    }, 10);
    displayButton("stop");
}


// create list

let addExe = document.getElementById("exe_btn");
let exeCon = document.getElementById("con");
let input = document.getElementById("exe");

addExe.addEventListener('click', function(){
    let newExe = document.createElement('p');
    newExe.innerText = input.value;
    exeCon.appendChild(newExe);
    input.value = "";
    newExe.addEventListener('click', function(){
        exeCon.style.textDecoration = "line-through";
    })
    newExe.addEventListener('dblclick', function(){
        exeCon.removeChild(newExe);
    })
})

