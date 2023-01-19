let button = document.querySelectorAll("input");

//EXERCICE 1
button[0].onclick = function () {
    document.querySelector("ul").firstChild.remove();
}

//EXERCICE 2
button[1].onclick = function () {
    document.querySelector("ul").lastChild.remove();
}
//EXERCICE 3
button[2].onclick = function () {
    let li = document.querySelector("ul").children
    let hasard = Math.floor(Math.random()*li.length)
    li[hasard].remove();
}

//EXERCICE 4

let li = document.createElement("li");
li.innerHTML = "nouveau li!";

let lii = document.querySelector("body").children[1].querySelectorAll("li");

button[3].onclick = function () {
    lii[1].before(li);
    lii[1].remove();
}

//EXERCICE 5

let li2 = document.createElement("li");
button[5].onclick = function () {
    li2.innerHTML = document.getElementById("replaceValue").value;
    lii[2].before(li2);
    lii[2].remove();
}

let ask = prompt("as t ilchoisis une boisson ? (y/n)");
check(ask)
function check(ask_Param) {
    while (ask_Param != 'y'|| ask_Param != 'n')  {
        ask_Param = prompt("Veuillez rentrer une valeur entre y ou n");  
    }
    return ask_Param;
}