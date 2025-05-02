function makeElements(){
    let container = document.querySelector("#container");

    let para = document.createElement("p");
    para.style.cssText ="color:red;";
    para.textContent = "Hey! I´m red.";
    container.appendChild(para);

    let h3 = document.createElement("h3");
    h3.style.cssText ="color:blue;";
    h3.textContent = "Hey! I´m blue h3.";
    container.appendChild(h3);

    let div = document.createElement("div")
    div.style.cssText="background-color:pink; border= 2px;";
    container.appendChild(div);

    let div2 = document.createElement("div")
    div2.style.cssText="color:black;";
    div2.textContent= "Im in a Div";
    div.appendChild(div2)

    let p= document.createElement("p")
    p.style.cssText="color:black;";
    p.textContent= "ME TOO!";
    div.appendChild(p)
    
}