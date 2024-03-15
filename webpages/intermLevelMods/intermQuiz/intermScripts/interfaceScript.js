window.onload = function() {
    document.getElementById("quizBGMusic").play(); 
   }
 
 
 let questions = [
     {
         id: 1,
         question: "It is called Multiple inheritance by interface if:",
         answer:"A class implements more interface and an interface extends to more interfaces",
         options: [
             "A class implements more interface but an interface does not extend to more interfaces",
             "A class does not implement more interface but an interface extends to more interfaces",
             "A class implements more interface and an interface extends to more interfaces",
             "None of the above"
         ]   
     },
     {
        id: 2,
        question: "It specifies the behavior of a class by providing an abstract type",
        answer:"Interfaces",
        options: [
            "Inheritance",
            "Interference",
            "Interfares",
            "Interfaces"
        ]   
    },

    {
        id: 3,
        question: "These are methods that cannot be instantiated",
        answer:"Abstract Methods",
        options: [
            "Interface Methods",
            "Abstract Methods",
            "Classic Methods",
            "Null Methods"
        ]   
    },
    {
        id: 4,
        question: "Pat's program has a class with an abstract method, what is the output if the method draw is called?<br> class Shape <br>{<br> abstract void draw(); }",
        answer:"Error, because the class is not abstract",
        options: [
            "The method draw will be executed",
            "class Shape will be inherited",
            "The method draw will be returned",
            "Error, because the class is not abstract"
        ]   
    },
    {
        id: 5,
        question: "Toni wants interface b to inherit interface a, what keyword needs to be used?",
        answer:"extends",
        options: [
            "extends",
            "implements",
            "Extends",
            "Implements"
        ]   
    },
    {
        id: 6,
        question: "Abstract methods should be written with: ",
        answer:"Parenthesis",
        options: [
            "Square Brackets",
            "Parenthesis",
            "Curly Brackets",
            "Comma"
        ]   
    },
    {
        id: 7,
        question: "How would you define an interface?",
        answer:"interface InterfaceName { }",
        options: [
            "interface InterfaceName ( )",
            "interface InterfaceName { }",
            "interf InterfaceName { }",
            "interface InterfaceName [ ]"
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
 