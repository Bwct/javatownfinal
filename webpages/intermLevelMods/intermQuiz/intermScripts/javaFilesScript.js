window.onload = function() {
    document.getElementById("quizBGMusic").play(); 
   }
 
 
 let questions = [
     {
         id: 1,
         question: "This is a type of storage that stores data permanently",
         answer:"Non-Volatile Storage",
         options: [
             "Memory",
             "Volatile Storage",
             "Non-Volatile Storage",
             "None of the above"
         ]   
     },
     {
        id: 2,
        question: "These provide uses that Java alone may not accomodate",
        answer:"Computer Files",
        options: [
            "File System",
            "Storage",
            "Memory",
            "Computer Files"
        ]   
    },

    {
        id: 3,
        question: "It is a temporary storage where data is lost when the computer is shut down",
        answer:"Volatile Storage",
        options: [
            "Non-Volatile Storage",
            "Volatile Storage",
            "Computer Storage",
            "File Storage"
        ]   
    },
    {
        id: 4,
        question: "These are used to perform operation on files and directories",
        answer:"File Classes",
        options: [
            "Storage Classes",
            "Directory Classes",
            "Path Classes",
            "File Classes"
        ]   
    },
    {
        id: 5,
        question: "Files that consist of data that can be read in a text editor",
        answer:"Text Files",
        options: [
            "Text Files",
            "Readable Files",
            "Image Files",
            "None of the above"
        ]   
    },
    {
        id: 6,
        question: "Used in creating objects containing information about files and directories",
        answer:"Path Classes",
        options: [
            "File Classes",
            "Path Classes",
            "Storage Classes",
            "Directory Classes"
        ]   
    },
    {
        id: 7,
        question: "Files that contain data other than text, mostly in binary format",
        answer:"Binary Files",
        options: [
            "Text Files",
            "Binary Files",
            "Path Files",
            "Storage Files"
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
 