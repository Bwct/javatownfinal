window.onload = function() {
   document.getElementById("quizBGMusic").play(); 
  }


let questions = [
    {
        id: 1,
        question: "It stores more than one type of data.",
        answer:"Non-Primitive Data Types",
        options: [
            "Primitive Data Types",
            "Strings",
            "Non-Primitive Data Types",
            "None of these"
        ]   
    },
    {
        id: 2,
        question: "Stores decimal values",
        answer: "Float/Double",
        options: [
          "int/byte",
          "Float/Double",
          "String/Arrays",
          "None of these"
        ]
      },
      {
        id: 3,
        question: "What type of data stores 7 decimal values?",
        answer: "float",
        options: [
          "float",
          "double",
          "long",
          "None of these"
        ]
      },
      {
        id: 4,
        question: "Stores a value of a character",
        answer: "char",
        options: [
          "String",
          "boolean",
          "char",
          "None of these"
        ]
      },
      {
        id: 5,
        question: "You are making a program that needs a true or false statement, which data type would you use to store true or false values?",
        answer: "boolean",
        options: [
          "boolean",
          "int",
          "short",
          "None of these"
        ]
      },
      {
        id: 6,
        question: "How many data types can store integers or numbers?",
        answer: "6",
        options: [
          "1",
          "3",
          "6",
          "4"
        ]
      },
      {
        id: 7,
        question: "It can only store one type of data.",
        answer: "Primitive Data Types",
        options: [
          "Primitive Data Types",
          "Non-Primitive Data Types",
          "Strings",
          "None of these"
        ]
      },
];




let question_count = 0;
let points = 0;


window.onload = function(){
   
    show(question_count);
};

function show(count){
    let question = document.getElementById("questions");
    let[first, second, third, fourth] = questions[count].options;

    question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`;
    toggleActive();  
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i < option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i < option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

// function next(){

//     if(question_count == questions.length -1){
//         location.href = "final.html";
        
//     }
//     console.log(question_count);


// let user_answer = document.querySelector("li.option.active").innerHTML;
// let correct = document.getElementById("evalCorrect");
// let wrong = document.getElementById("evalWrong");
// var correctAudio = new Audio('audios/correct.mp3');
// var wrongAudio = new Audio('audios/wrong.mp3');


// if(user_answer == questions[question_count].answer){
//   points += 5;
//   let existingPoints = localStorage.getItem("points") || 0;
//   let totalPoints = parseInt(existingPoints) + parseInt(points);
//   localStorage.setItem("points", totalPoints);
//   correct.style.display = "block";
//   correct.innerHTML = "Correct Answer!";
//   wrong.style.display = "none";
//   correctAudio.volume = 0.3;
//   correctAudio.play();

// } else{
//  wrong.style.display = "block";
//  wrong.innerHTML = "Answer: " + questions[question_count].answer;
//  correct.style.display = "none";
//  wrongAudio.volume = 0.3;
//  wrongAudio.play();
// }
// console.log(points);
// question_count++;

// show(question_count);

// }