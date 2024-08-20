const textbox = document.getElementById("textbox"); // good to put all your variables at the top
const toFarenheit = document.getElementById("toFarenheit"); // good to put all your variables at the top
const toCelsius = document.getElementById("toCelsius"); // good to put all your variables at the top
const result = document.getElementById("result"); // good to put all your variables at the top
let temp;


function convert(){
    if (toFarenheit.checked){
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32; // conversion calculation
        result.textContent = temp.toFixed(1) /* for extra decimal value */+ " °F";

    }
    else if(toCelsius.checked){
        temp = Number(textbox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + " °C";



    }
    else{
        result.textContent = "Select a unit";
    }
}