const legs = document.getElementById('legs_day');
const text = document.getElementById('playerText')
const push = document.getElementById('push_day');
const pull = document.getElementById('pull_day');

const btn = document.querySelectorAll(".btn")

let day;

btn.forEach(button => button.addEventListener("click", () => {
    day = button.textContent;
    text.textContent = `Let's make: ${day}`

}))
