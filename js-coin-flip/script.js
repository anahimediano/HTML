let headsButton =document.querySelector("#heads");
let tailsButton =document.querySelector("#tails");

let resultDiv = document.querySelector("#result");
let resultDiv2 = document.querySelector("#result2")

function headsOrTails (){
    let coin = Math.random ();
    if (coin <= 0.5) {
    console.log("Heads")
    return ("Heads")
    } else {
    console.log("Tails");
    }
    return ("Tails")
}

headsButton.addEventListener("click", function(){
    let coinResult = headsOrTails ()
    resultDiv.textContent = coinResult;
    if (coinResult == "Heads") {
    resultDiv2.textContent = "You Win"
    } else {
    resultDiv2.textContent = "You Lose"
    }

})

tailsButton.addEventListener("click", function(){
    let coinResult2 = headsOrTails ()
    resultDiv.textContent = coinResult2;
    if (coinResult2 == "Tails") {
    resultDiv2.textContent = "You Win"
    } else {
        resultDiv2.textContent = "You Lose"
    }
})


