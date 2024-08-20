const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const number = document.getElementById("counter");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    number.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    number.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    number.textContent = count;
}
