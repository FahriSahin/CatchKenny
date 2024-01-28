var windowHeight = window.innerHeight * 0.75 - 116;
var windowWidth = window.innerWidth - 100;

var randomHeight = Math.floor(Math.random()*windowHeight);
var randomWidth = Math.floor(Math.random()*windowWidth);


var img = document.createElement("img");
img.src = "./images/kenny.png";
img.style.backgroundColor = "e3e3e3";
img.style.position = 'relative'; 
img.style.zIndex = 1;
img.style.top = randomHeight+"px";
img.style.left = randomWidth+"px";
document.body.appendChild(img);

var score = document.querySelector("#score");
var scoreCounter = 0;
var time = document.querySelector("#time");
var totalTime = 60 , minute , second;
var newInterval = setInterval(() => {
    minute = Math.floor(totalTime/60);
    second = totalTime%60;
    time.innerText = "Time : " + minute + " : " + (second < 10 ? "0"+second : second);
    totalTime--;

    if (totalTime < 0) {
        clearInterval(newInterval);
        img.removeEventListener("click",clickHandler);
    }
}, 1000);

    const clickHandler = () =>{
        randomHeight = Math.floor(Math.random()*windowHeight);
        randomWidth = Math.floor(Math.random()*windowWidth);
        img.style.top = randomHeight+"px";
        img.style.left = randomWidth+"px";
        score.innerText = "Score : " + ++scoreCounter;
    }
    img.addEventListener("click" , clickHandler);
