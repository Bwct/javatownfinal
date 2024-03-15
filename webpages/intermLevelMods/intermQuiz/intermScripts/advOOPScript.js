window.onload = function() {
    document.getElementById("quizBGMusic").play(); 
   }
 
 
 let questions = [
     {
         id: 1,
         question: "Represents a real world object or abstraction of a concept",
         answer:"Objects",
         options: [
             "Classes",
             "Packages",
             "Objects",
             "None of these"
         ]   
     },
     {
        id: 2,
        question: "An object has all of these characteristics EXCEPT?",
        answer:"Attitude",
        options: [
            "Attributes",
            "States",
            "Behaviors",
            "Attitude"
        ]   
    },

    {
        id: 3,
        question: "Creates an instance of an object",
        answer:"Classes",
        options: [
            "Objects",
            "Classes",
            "Constructors",
            "Methods"
        ]   
    },
    {
        id: 4,
        question: "Collection of classes and interfaces",
        answer:"Packages",
        options: [
            "Cluster",
            "Pack",
            "Classes",
            "Packages"
        ]   
    },
    {
        id: 5,
        question: "A programmer wants to use a Scanner in his program, pick the right syntax in importing packages",
        answer:"import java.util.Scanner;",
        options: [
            "import java.util.Scanner;",
            "import java.util.Scan",
            "import java.util.*",
            "import java.util.Scanner"
        ]   
    },
    {
        id: 6,
        question: "What is the output of the code, assume there's objects and classes created: public void calculate() { int a = 20; int b = 10; System.out.println(a * b); }",
        answer:"200",
        options: [
            "300",
            "10",
            "200",
            "50"
        ]   
    },
    {
        id: 7,
        question: "I want you to import the whole package of java util",
        answer:"import java.util.*;",
        options: [
            "import java.util.",
            "import java.util.*;",
            "import java.util.all;",
            "import java.util.whole;"
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
 