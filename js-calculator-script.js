let num1Input = document.querySelector("#num1");
let num2Input = document.querySelector("#num2");

let plusButton = document.querySelector("#plus");
let minusButton = document.querySelector("#minus");
let multiplicationButton = document.querySelector("#multiplication");
let divisionButton = document.querySelector("#division");

let resultDiv = document.querySelector("#result");


function addition(x,y){
    console.log(x+y);
    return x+y;
}

function anahi(x,y){
    console.log(x-y);
    return x-y;
}

function pamelita(x,y){
    console.log(x*y);
    return x*y;
}

function division(x,y){
    console.log(x/y);
    return x/y;
}


plusButton.addEventListener("click", function(){
    //console.log(num1.value);
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    //addition(num1, num2);
    resultDiv.textContent = addition(num1, num2);
})

minusButton.addEventListener("click", function(){
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    resultDiv.textContent = anahi(num1, num2);
})

multiplicationButton.addEventListener("click", function(){
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    resultDiv.textContent = pamelita(num1, num2);
})

divisionButton.addEventListener("click", function(){
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    resultDiv.textContent = division(num1, num2);
})