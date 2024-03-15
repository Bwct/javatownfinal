
 
 let questions = [
     {
         id: 1,
         question: "An optional statement which executes if the condition evaluates to false",
         answer:"else",
         options: [
             "if",
             "operators",
             "else",
             "None of these"
         ]   
     },
     {
         id: 2,
         question: "Used to perform different actions based on conditions",
         answer: "Conditional Statements",
         options: [
           "Logical Statements",
           "Conditional Statements",
           "Comparison Statements",
           "None of these"
         ]
       },
       {
         id: 3,
         question: "The AND logical operator is denoted by two ________?",
         answer: "Ampersands",
         options: [
           "Horizontal Lines",
           "Ampersands",
           "Forward Slashes",
           "None of these"
         ]
       },
       {
         id: 4,
         question: "What is the Comparison Operator symbol for 'not equal to'?",
         answer: "!=",
         options: [
           "==",
           "=!",
           "!=",
           "None of these"
         ]
       },
       {
         id: 5,
         question: "Choose the right syntax for else-if statements",
         answer: "if (condition) {} else-if(condition) {} else {}",
         options: [
           "if (condition) {} else-if(condition) {} else {}",
           "if (condition) {} else(condition) {} else-if {}",
           "if (condition) {} else-if() {} else {}",
           "None of these"
         ]
       },
       {
         id: 6,
         question: "This operator checks if any of the conditions is true",
         answer: "OR",
         options: [
           "AND",
           "FOR",
           "OR",
           "IF"
         ]
       },
       {
         id: 7,
         question: "A programmer wants to break a loop in his program, what keyword should he use?",
         answer: "break;",
         options: [
           "break;",
           "continue;",
           "destroy;",
           "None of these"
         ]
       },
       {
        id: 8,
        question: "It is a loop that repeatedly executes a target statement as long as the condition is true",
        answer: "while loop",
        options: [
          "for loop",
          "while loop",
          "do-while loop",
          "None of these"
        ]
      },
      {
        id: 9,
        question: "This operator reverses the condition of a statement. (Ex: a condition that is true will evaluate as false)",
        answer: "NOT operator",
        options: [
          "OR operator",
          "REV operator",
          "NOT operator",
          "None of these"
        ]
      },
      {
        id: 10,
        question: "A loop that can be written that executes a specific number of times",
        answer: "for loop",
        options: [
          "foreach loop",
          "for loop",
          "from loop",
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
 
