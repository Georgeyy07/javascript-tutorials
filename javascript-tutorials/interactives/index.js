const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");

const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onClick = function(){
    if (myCheckBox.checked){
        subResult.textContent = "You are subscribed!"; // gets the <p> of subResult and changes it to this text
    }

    else{
        subResult.textContent = "You are not subscribed";
    }

    if (visaBtn.checked){
        paymentResult.textContent = "you are paying with visa";

    }

    if (masterCardBtn.checked){
        paymentResult.textContent = "you are paying with visa";
        
    }

    if (payPalBtn.checked){
        paymentResult.textContent = "you are paying with visa";
        
    }

    else{
        paymentResult.textContent = "you must select a payment type";
    }
}