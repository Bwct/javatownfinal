
 
 let questions = [
    {
        id: 1,
        question: "This keyword is used in creating objects from a class",
        answer:"new",
        options: [
            "create",
            "start",
            "new",
            "None of these"
        ]   
    },
    {
        id: 2,
        question: "It is a group of objects which have common properties",
        answer: "Classes",
        options: [
          "Objects",
          "Classes",
          "Blueprint",
          "None of these"
        ]
      },
      {
        id: 3,
        question: "These are used in initializing objects and has the same name as the parent class",
        answer: "Constructors",
        options: [
          "Data Members",
          "Constructors",
          "Nested Class",
          "Methods"
        ]
      },
      {
        id: 4,
        question: "Keywords used to control visibility of class's fields, methods, etc.",
        answer: "Access Modifiers",
        options: [
          "Modified Accessors",
          "Modified Access",
          "Access Modifiers",
          "Access Modded"
        ]
      },
      {
        id: 5,
        question: "What is the limit when creating classes?",
        answer: "foreach loop",
        options: [
          "Only one class can be created",
          "Ten classes can be created",
          "One Thousand classes can be created",
          "There are no limits in creating classes"
        ]
      },
      {
        id: 6,
        question: "A newbie asks you how to create objects from a class, what is the correct syntax in creating objects?",
        answer: "className objectName = new className();",
        options: [
          "className objectName = new objectName();",
          "objectName className = new className();",
          "className objectName = new className();",
          "objectName className = new objectName();"
        ]
      },
      {
        id: 7,
        question: "These are classes inside of another class",
        answer: "Nested Class",
        options: [
          "Data Members",
          "Constructors",
          "Method",
          "Nested Class"
        ]
      },
      {
       id: 8,
       question: "What is the access modifier that can be accessible everywhere(inside and outside the packages, methods, etc.)?",
       answer: "public",
       options: [
         "private",
         "public",
         "default",
         "Protected"
       ]
     },
     {
       id: 9,
       question: "I want to call a method named honk() from \'Vehicle\' class to my Main class and I have an object named \'truckObj\' how can I call the method?",
       answer: "Vehicle truckObj = new Vehicle(); truckObj.honk();",
       options: [
         "truckObj Vehicle = new Vehicle(); truckObj.honk();",
         "Vehicle truckObj = new truckObj(); Vehicle.honk();",
         "truckObj Vehicle = new truckObj(); truckObj.honk();",
         "Vehicle truckObj = new Vehicle(); truckObj.honk();"
       ]
     },
     {
       id: 10,
       question: "What is the access modifier that can be accessible within and outside of a package through a child class?",
       answer: "Protected",
       options: [
         "private",
         "protected",
         "public",
         "default"
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

