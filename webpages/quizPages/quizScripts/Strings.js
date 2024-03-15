
 
 let questions = [
    {
        id: 1,
        question: "What is the correct way of declaring a String?",
        answer:"String name = \"Ruby\"; ",
        options: [
            "string name = \"Ruby\";",
            "String name = \"Ruby\";",
            "String name = \'Ruby\';",
            "None of these"
        ]   
    },
    {
        id: 2,
        question: "It is used in inserting special characters in Java strings",
        answer: "Backslash Symbol(\\)",
        options: [
          "Forwardslash Symbol(/)",
          "Horizontal Line Symbol(|)",
          "Backslash Symbol(\\)",
          "None of these"
        ]
      },
      {
        id: 3,
        question: "This sign is used in concatenating strings.",
        answer: "+",
        options: [
          "-",
          "+",
          "%",
          "/"
        ]
      },
      {
        id: 4,
        question: "A programmer wants to display his name declared in a string with no line break, what should he use?",
        answer: "System.out.println();",
        options: [
          "System.out.println();",
          "System.out.print();",
          "system.out.print();",
          "None of these"
        ]
      },
      {
        id: 5,
        question: "Choose the correct string type.",
        answer: "String numberString = \"3823\";",
        options: [
          "String numberString = \"3823\";",
          "String numberString = 3823;",
          "String numberString = \"3823\"",
          "None of these"
        ]
      },
      {
        id: 6,
        question: "What is the output of the program? String fName = \"Aqua\"; String lName = \"Hoshino\"; System.out.println(\"fName + lName\"); ",
        answer: "fName + lName",
        options: [
          "AquaHoshino",
          "Aqua Hoshino",
          "fName + lName",
          "Error"
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

