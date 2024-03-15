window.onload = function() {
    document.getElementById("quizBGMusic").play(); 
   }
 
 
 let questions = [
     {
         id: 1,
         question: "Collections of statements that are grouped together",
         answer:"Methods",
         options: [
             "Instances",
             "Static",
             "Methods",
             "Accessors"
         ]   
     },
     {
        id: 2,
        question: "These are variables declared outisde a method, constructor or a code block",
        answer:"Instance variables",
        options: [
            "String Variables",
            "Obj Variables",
            "Behavior Variables",
            "Instance variables"
        ]   
    },

    {
        id: 3,
        question: "This modifier allows access of other classes and packages outside.",
        answer:"public",
        options: [
            "default",
            "public",
            "private",
            "protected"
        ]   
    },
    {
        id: 4,
        question: "These are variables declared within a method",
        answer:"Local variables",
        options: [
            "Global variables",
            "Variables Within",
            "Variables Inside",
            "Local variables"
        ]   
    },
    {
        id: 5,
        question: "What keyword should be used when pertaining to the name of an object receiving a method call?",
        answer:"this",
        options: [
            "this",
            "object.name",
            "that",
            "object.pertain"
        ]   
    },
    {
        id: 6,
        question: "This is used in encapsulation and is only accessible within the same class where it is declared",
        answer:"private",
        options: [
            "public",
            "locked",
            "private",
            "cannot"
        ]   
    },
    {
        id: 7,
        question: "This contains the memory address of the object named by the variable",
        answer:"Class Type Variables",
        options: [
            "Method Type Variables",
            "Class Type Variables",
            "Instance Type Variables",
            "Constructor Type Variables"
        ]   
    },

    {
        id: 8,
        question: "Getters and setters are used to store and get data from what kind of variable?",
        answer:"private instance variables",
        options: [
            "public instance variables",
            "default instance variables",
            "private instance variables",
            "protected instance variables"
        ]   
    },
    {
        id: 9,
        question: "These are variables shared by all the objects of their class",
        answer:"Static",
        options: [
            "Static",
            "Void",
            "Public",
            "Every"
        ]   
    },

    {
        id: 10,
        question: "Methods used to create and initialize objects",
        answer:"Constructors",
        options: [
            "Accessors",
            "Mutators",
            "Creators",
            "Constructors"
        ]   
    },

    {
        id: 11,
        question: "Methods that has no relation to any object",
        answer:"Static Method",
        options: [
            "Void Method",
            "Static Method",
            "Scanner Method",
            "None of the above"
        ]   
    },

    {
        id: 12,
        question: "A programmer wants to have standard mathematical methods in his program, what class should he use?",
        answer:"Math Class",
        options: [
            "Arithmetic Class",
            "Integer Class",
            "Math Class",
            "Operations Class"
        ]   
    },
    {
        id: 13,
        question: "What is the program's output: double x = 10; double y = 2; System.out.println(Math.pow(x, y));",
        answer:"100.0",
        options: [
            "100",
            "100.0",
            "20.0",
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
 