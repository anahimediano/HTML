function makeElements(){
    let container = document.querySelector("#container");

    let para = document.createElement("p");
    para.style.cssText ="color:red;";
    para.textContent = "Hey! I´m red.";
    container.appendChild(para);
}