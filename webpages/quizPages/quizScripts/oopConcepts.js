
 
 let questions = [
    {
        id: 1,
        question: "It is the process of hiding complex details while showing functionality to users",
        answer:"Abstraction",
        options: [
            "Instantiation",
            "Encapsulation",
            "Abstraction",
            "Inheritance"
        ]   
    },
    {
        id: 2,
        question: "It is the creation of new objects from class or classes",
        answer: "Instantiation",
        options: [
          "Polymorphism",
          "Instantiation",
          "Abstraction",
          "Encapsulation"
        ]
      },
      {
        id: 3,
        question: "It is a method where a derived class obtains properties from parent class",
        answer: "Inheritance",
        options: [
          "Encapsulation",
          "Inheritance",
          "Instantiation",
          "Polymorphism"
        ]
      },
      {
        id: 4,
        question: "It is the process of keeping data and codes safe by setting private modifiers to data members, methods,etc.",
        answer: "Encapsulation",
        options: [
          "Abstraction",
          "Polymorphism",
          "Encapsulation",
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

