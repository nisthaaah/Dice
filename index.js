var num1 = Math.floor(Math.random() * 6) + 1;
var num2 = Math.floor(Math.random() * 6) + 1;

var img1 = "images/dice" +num1+ ".png";
var img2 = "images/dice" +num2+ ".png";

var imgOne = document.querySelectorAll("img")[0];
imgOne.setAttribute("src", img1);

var imgTwo = document.querySelectorAll("img")[1];
imgTwo.setAttribute("src", img2);

if(num1 > num2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!! 🚩";
}
else if(num1 < num2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!! 🚩";
}
else if(num1 === num2){
    document.querySelector("h1").innerHTML = "DRAW!! 🏳️";
}