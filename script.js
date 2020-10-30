// Trigger game to start
var stButton = document.getElementsByClassName("start-btn");
var timerCountDown = document.getElementsById("timer-countdown");
var que1 = document.getElementsByClassName("question1");
var listQue = document.getElementsByClassName("listQs");
var totalQue = document.getElementsByClassName("totalQ");
var result = document.getElementsById("result");




// game starts when button is click, eventlistener.
stButton.addEventListener("click", function(){
// clicked button will trigger a function that shows the 1st question with its options. 
    
});
que1.textContent = listQue;
    console.log("click")
 




// create an array of objects for questions and choices.
var arrayQue = [
    {
        question: "What does HTML stand for?",
        choices: ["HYPER TOOL MARKUP LANGUAGE", "HYPER TEXT MARKUP LANGUAGE", "HYPER TEXT MAKEUP LANGUAGE", "HYPER TEXT MAIN LEXICON"],
        correctAnswer: "HYPER TEXT MARKUP LANGUAGE"
    },
    {
        question: "What does CSS stand for?",
        choices: ["Computer Style Sheet", "Cascade Style Software", "Computer Sheet Software", "Cascade Style Sheet"],
        correctAnswer: "Cascade Style Sheet"
    },
    {
        question: "Which option is a value?",
        choices: ["Logic Operators", "Loops", "Arrays", "Conditionals"],
        correctAnswer: "Arrays"
    },
    {
        question: "Which option is a variable?",
        choices: ["eventListeners", "Numbers", "Booleans", "Strings"],
        correctAnswer: "eventListeners"
    },
    
    
]
var currentIndex = 0;
 arrayQue[currentIndex].question
 currentIndex++;

 var currentIndex = 1;
 arrayQue[currentIndex].question
 currentIndex++;

 var currentIndex = 2;
 arrayQue[currentIndex].question
 currentIndex++;

 var currentIndex = 3;
 arrayQue[currentIndex].question
 currentIndex++;
// Create a function that checks the answer of the button, and displays correct or incorrect.
// Create timer and when user picks incorrect button, time is shaved (10 secs off).
// Display timer countdown on front-end, triggered with  start quiz button.
var time;
var timer = 60; 

// When game is over, either finishing the game and or timer runs out, trigger a function that will calculate the score.
// Store the scores (highs scores) and have an initial input (button).
// look up css display: none, adding and removing a class. This will go with display correct and incorrect result. 