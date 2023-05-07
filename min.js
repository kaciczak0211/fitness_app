const legs = document.getElementById('legs_day');
const push = document.getElementById('push_day');
const pull = document.getElementById('pull_day');


function choseLegs(){
        console.log(legs.value)
    }

legs.addEventListener('click', choseLegs, true);

function chosePull(){
    console.log(pull.value)
}

pull.addEventListener('click', chosePull, true);

function chosePush(){
    console.log(push.value)
}

push.addEventListener('click', chosePush, true);

