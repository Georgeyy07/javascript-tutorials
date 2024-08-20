const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

function changeColor(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "ouch";

}


myBox.addEventListener("click", changeColor);

function changeHoverColor(event){
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Dont do it";
}

myBox.addEventListener("mouseover", changeHoverColor);

// another way of doing it with an arrow function

myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me";
});

myButton.addEventListener("click", event => {
    myBox.style.backgroundColor = "pink";
    myBox.textContent = "Click Me";
});

