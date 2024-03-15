window.onload = function() {
    document.getElementById("quizBGMusic").play(); 
   }
 
 
 let questions = [
     {
         id: 1,
         question: "These are known as child classes",
         answer:"Derived Class",
         options: [
             "Copied Class",
             "Inherit Class",
             "Derived Class",
             "None of these"
         ]   
     },
     {
        id: 2,
        question: "This enables the use of an existing class to define new classes",
        answer:"Inheritance",
        options: [
            "Derivative",
            "Copying",
            "Instantiation",
            "Inheritance"
        ]   
    },

    {
        id: 3,
        question: "Help a novice programmer define a child class named Apple from a parent class named Fruits",
        answer:"class Apple extends Fruits { (codes) }",
        options: [
            "class Apple implements Fruits { (codes) }",
            "class Apple extends Fruits { (codes) }",
            "class Apple extends fruits { (codes) }",
            "class Apple extends Fruits ( {codes} )"
        ]   
    },
    {
        id: 4,
        question: "A type of inheritance where a subclass inherits attributes for more than one superclass",
        answer:"Multiple Inheritance",
        options: [
            "Hierarchal Inheritance",
            "Single Level Inheritance",
            "Hybrid Inheritance",
            "Multiple Inheritance"
        ]   
    },
    {
        id: 5,
        question: "What type of inheritance is it called when there are two or more parent and derived classes?",
        answer:"Multi-Level Inheritance",
        options: [
            "Multi-Level Inheritance",
            "Multiplied Inheritance",
            "Hybrid Inheritance",
            "Multiplicated Inheritance"
        ]   
    },
    {
        id: 6,
        question: "subclasses Apple, Banana, and Orange are derived from one parent class named Fruits, this type of inheritance is called?",
        answer:"Hierarchal Inheritance",
        options: [
            "Single-Parent Inheritance",
            "Hybrid Inheritance",
            "Hierarchal Inheritance",
            "None of the above"
        ]   
    },
    {
        id: 7,
        question: "This type of inheritance only consist of one parent and derived class",
        answer:"Single Level Inheritance",
        options: [
            "Single Parent Inheritance",
            "Single Level Inheritance",
            "Single Child Inheritance",
            "Single Inheritance"
        ]   
    },

    {
        id: 8,
        question: "This is the combination of all the inheritances",
        answer:"Hybrid Inheritance",
        options: [
            "Hierarchal Inheritance",
            "Single Level Inheritance",
            "Hybrid Inheritance",
            "Multiple Inheritance"
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
 