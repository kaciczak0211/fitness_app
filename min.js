
const text = document.getElementById('playerText')
const btn = document.querySelectorAll(".btn")

let day;

btn.forEach(button => button.addEventListener("click", () => {
    day = button.textContent;
    text.textContent = `Let's make: ${day}`

}))

// create timer
// btn get elements
let startBtn = document.getElementById("start");
let pauseBtn = document.getElementById("pause");
let resetBtn = document.getElementById("reset");
// hour varible
let hour = 00;
let min = 00;
let sec = 00;
let miliSec = 00;


//start btn addEventListener
startBtn.addEventListener('click', function (){
    timer = true;
    stopWatch();
});

//stop btn addEventListener
pauseBtn.addEventListener('click', function (){
    timer = false;
});

//reset btn addEventListener
resetBtn.addEventListener('click', function (){
    timer = false;
    hour = 0;
    sec = 0;
    miliSec = 0;
    document.getElementById("hr").innerHTML = "00:";
    document.getElementById("min").innerHTML = "00:";
    document.getElementById("sec").innerHTML = "00:";
    document.getElementById("mili").innerHTML = "00";
});

// stopWatch function
function stopWatch() {
    if(timer) {
        miliSec++;

        if(miliSec == 100) {
            sec++;
            miliSec = 0;
        }

        if(sec == 60) {
            min++;
            sec = 0;
        }
        
        if(min == 60) {
            hour++;
            min = 0;
            sec = 0;
        }
    
    let hrNext = hour;
    let minNext = min;
    let secNext = sec;
    let miniSecNext = miliSec;

    if(hour < 10) {
        hrNext = "0" + hrNext;
    }

    if(min < 10) {
        minNext = "0" + minNext;
    }

    if(sec < 10) {
        secNext = "0" + secNext;
    }

    if(miliSec < 10) {
        miniSecNext = "0" + miniSecNext;
    }

    document.getElementById("hr").innerHTML = hrNext + ":";
    document.getElementById("min").innerHTML = minNext + ":";
    document.getElementById("sec").innerHTML = secNext + ":";
    document.getElementById("mili").innerHTML = miniSecNext;
    setTimeout(stopWatch, 10);
    }
};








// create list

let addExe = document.getElementById("exe_btn");
let exeCon = document.getElementById("con");
let input = document.getElementById("exe");
let next = 0;

addExe.addEventListener('click', function(){
    next++;
    let newExe = document.createElement('p');
    newExe.innerText = next + ". " + input.value;
    exeCon.appendChild(newExe);
    input.value = "";
    newExe.addEventListener('dblclick', function(){
        exeCon.removeChild(newExe);
    })
    newExe.addEventListener('click', function(event){
        newExe.style.textDecoration = "line-through";
        newExe.style.color = "red";
    })
})

