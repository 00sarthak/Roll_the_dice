var y_val = Math.floor(Math.random() * 6 ) + 1;
var f_val = Math.floor(Math.random() * 6 ) + 1;

if(y_val === 1) {
    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice-six-faces-one.png");
}else if(y_val === 2) {
    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice-six-faces-two.png");
}else if(y_val === 3) {
    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice-six-faces-three.png");
}else if(y_val === 4) {
    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice-six-faces-four.png");
}else if(y_val === 5) {
    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice-six-faces-five.png");
}else if(y_val === 6) {
    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice-six-faces-six.png");
}

if(f_val === 1) {
    document.getElementsByTagName("img")[1].setAttribute("src", "images/dice-six-faces-one.png");
}else if(f_val === 2) {
    document.getElementsByTagName("img")[1].setAttribute("src", "images/dice-six-faces-two.png");
}else if(f_val === 3) {
    document.getElementsByTagName("img")[1].setAttribute("src", "images/dice-six-faces-three.png");
}else if(f_val === 4) {
    document.getElementsByTagName("img")[1].setAttribute("src", "images/dice-six-faces-four.png");
}else if(f_val === 5) {
    document.getElementsByTagName("img")[1].setAttribute("src", "images/dice-six-faces-five.png");
}else if(f_val === 6) {
    document.getElementsByTagName("img")[1].setAttribute("src", "images/dice-six-faces-six.png");
}

if(y_val > f_val){
    document.getElementsByClassName("play")[0].getElementsByTagName("h1")[0].innerHTML="YOU WON!!!";
}else if(f_val > y_val){
    document.getElementsByClassName("play")[0].getElementsByTagName("h1")[0].innerHTML="FRIEND WON!!!";
}else{
    document.getElementsByClassName("play")[0].getElementsByTagName("h1")[0].innerHTML="TIED!!!<br>PLAY AGAIN!";
}