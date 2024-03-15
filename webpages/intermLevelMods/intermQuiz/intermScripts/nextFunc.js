function next(){

    if(question_count == questions.length -1){
        location.href = "intermResults.html";
        
    }
    console.log(question_count);


let user_answer = document.querySelector("li.option.active").innerHTML;
let correct = document.getElementById("evalCorrect");
let wrong = document.getElementById("evalWrong");
var correctAudio = new Audio('../../audios/correct.mp3');
var wrongAudio = new Audio('../../audios/wrong.mp3');


if(user_answer == questions[question_count].answer){
  points += 10;

  let existingPoints = localStorage.getItem("points") || 0;
  let totalPoints = parseInt(existingPoints) + parseInt(points);
  localStorage.setItem("points", totalPoints);
  correct.style.display = "block";
  correct.innerHTML = "Correct Answer!";
  wrong.style.display = "none";
  correctAudio.volume = 0.3;
  correctAudio.play();

} else{
 wrong.style.display = "block";
 wrong.innerHTML = "Answer: " + questions[question_count].answer;
 correct.style.display = "none";
 wrongAudio.volume = 0.3;
 wrongAudio.play();
}
console.log(points);
question_count++;

show(question_count);

}