

let storedPoints = localStorage.getItem("points") || 0;



document.querySelector("span.points").innerHTML = storedPoints;






var finished = new Audio('audios/lvlPassed.mp3');
finished.volume = 0.3;
finished.play();