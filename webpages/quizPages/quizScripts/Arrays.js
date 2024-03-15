
 
 let questions = [
    {
        id: 1,
        question: "What kind of brackets are used when declaring arrays?",
        answer:"[]",
        options: [
            "()",
            "{}",
            "[]",
            "None of these"
        ]   
    },
    {
        id: 2,
        question: "It is a collection of variables with the same type",
        answer: "Arrays",
        options: [
          "Storage",
          "Arrays",
          "Inventory",
          "None of these"
        ]
      },
      {
        id: 3,
        question: "Index numbers always starts with what number?",
        answer: "0",
        options: [
          "1",
          "0",
          "2",
          "-1"
        ]
      },
      {
        id: 4,
        question: "How do we access the number of elements within an array?",
        answer: "array length property",
        options: [
          "array width property",
          "array size property",
          "array length property",
          "None of these"
        ]
      },
      {
        id: 5,
        question: "This loop eliminates the possibility of bugs and makes the code easier to read",
        answer: "foreach loop",
        options: [
          "foreach loop",
          "do-while loop",
          "for loop",
          "None of these"
        ]
      },
      {
        id: 6,
        question: "These are arrays inside of another array",
        answer: "Multi-Dimensional Arrays",
        options: [
          "Inner-Dimensional Arrays",
          "Outer-Dimensional Arrays",
          "Multi-Dimensional Arrays",
          "None of these"
        ]
      },
      {
        id: 7,
        question: "How do I set a storage capacity for my array?",
        answer: "int[] sampleNum = new int[5];",
        options: [
          "int sampleNum = new int[5];",
          "int[] sampleNum = new int[5]",
          "int sampleNum = new int[5]",
          "int[] sampleNum = new int[5];"
        ]
      },
      {
       id: 8,
       question: "What is the other term for two-dimensional arrays?",
       answer: "data table",
       options: [
         "collections",
         "data table",
         "file table",
         "storage system"
       ]
     },
     {
       id: 9,
       question: "Choose the correct output of the program: String[] blackPink = {\"Lisa\",\" Jennie\",\"Rosé\",\"Jisoo\"}; System.out.println(blackPink[2]);",
       answer: "Rosé",
       options: [
         "Lisa",
         "Jennie",
         "Jisoo",
         "Rosé"
       ]
     },
     {
       id: 10,
       question: "A programmer wants to declare a multi-dimensional array that has a type of double, what is the correct syntax?",
       answer: "double[][] decimalVals = new double[5][5];",
       options: [
         "double[][] decimalVals = new double[][]",
         "double[][] decimalVals = new double[5][5];",
         "double[][] decimalVals = new double[5];",
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

