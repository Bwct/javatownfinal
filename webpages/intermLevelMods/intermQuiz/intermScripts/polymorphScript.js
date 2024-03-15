window.onload = function() {
    document.getElementById("quizBGMusic").play(); 
   }
 
 
 let questions = [
     {
         id: 1,
         question: "An execution of a program where the object type is known at compile time",
         answer:"Static Binding",
         options: [
             "Dynamic Binding",
             "Executive Binding",
             "Static Binding",
             "Compiler Binding"
         ]   
     },
     {
        id: 2,
        question: "This state is where the executable code started running",
        answer:"Run-time",
        options: [
            "Running Time",
            "Executable time",
            "Compile time",
            "Run-time"
        ]   
    },

    {
        id: 3,
        question: "It is the ability of an object to take on many forms",
        answer:"Polymorphism",
        options: [
            "Interfacing",
            "Polymorphism",
            "Formation",
            "Creation"
        ]   
    },
    {
        id: 4,
        question: "It is referred to as a run-time polymorphism and the functionality of its method call is decided at run-time",
        answer:"Dynamic Binding",
        options: [
            "Dimension Binding",
            "Dymanic Binding",
            "Runtime Binding",
            "Dynamic Binding"
        ]   
    },
    {
        id: 5,
        question: "Paolo's program has a class with more than one method of the same name but different parameters, this technique is called?",
        answer:"Function Overloading",
        options: [
            "Function Overloading",
            "Function Overwriting",
            "Function Oversee",
            "Method Overwriting"
        ]   
    },
    {
        id: 6,
        question: "This is the time where source code is converted into an executable code",
        answer:"Compile time",
        options: [
            "Run-time",
            "Executable time",
            "Compile time",
            "Hero time"
        ]   
    },
    {
        id: 7,
        question: "Miguel's program has classes with methods that has the same name but different behaviors, this method is called?",
        answer:"Virtual Functions",
        options: [
            "Function Overlooking",
            "Virtual Functions",
            "Virtual Methods",
            "Virtual Behaviors"
        ]   
    },

    {
        id: 8,
        question: "what will be the output if the child class method is called:<br> parent { <br>public void speak() { System.out.println(\"That's bad\"); } } <br>child { <br>public void cry() { System.out.println(\"HUHUHU\"); } }",
        answer:"HUHUHU",
        options: [
            "That's bad",
            "Error",
            "HUHUHU",
            "child"
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
 