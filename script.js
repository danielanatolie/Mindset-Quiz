(function (){  
    // OBJECT CONSTRUCTOR:
    // Question constructor
    function Question(question, choice, answer) {
        this.question = question;
        this.choice = choice;
        this.answer = answer; 
    };

    // OBJECT PROTOTYPE
    // Methods available to each Question object
    
    // Displays all of the choices 
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for(var i = 0; i<this.choice.length; i++) {
            console.log(this.choice[i]);
        }
    }

    // Checks if the answer is correct,
    // Prints to the console.log, updates and  
    // prints total score
    Question.prototype.checkAnswer = function(ans, totalScoreFunc) {
        var score;
        if(parseInt(ans) === this.answer) {
            console.log('Correct!');
            score = totalScoreFunc(true);
        } else {
            console.log('Incorrect!');
            score = totalScoreFunc(false);
        }
        this.displayScore(score);
    }

    // Displays the current score
    Question.prototype.displayScore = function(score) {
        console.log("Your current score is: " + score);
        console.log("-----------------------");
    }

    // Prints the randomly selected question 
    function nextQuestion() {
        var randNum = Math.floor(Math.random()*3); 
        questions[randNum].displayQuestion(); 
        var ans = prompt('Choose a number or type exit');
        if(ans != 'exit') {
            questions[randNum].checkAnswer(ans, totalScoreFunc);
            nextQuestion();
        }  
    }

    // Closure-technique, totalScoreFunc stores the 
    // anonymous function from score(), through closure
    // remains to have access to sc, and is passed
    // through checkAnswer
    function score() {
        var sc = 0;
        return function(correct) {
            if(correct) {
                sc++;
            }
            return sc;
        }
    }
    // Stores the anonymous function from score()
    var totalScoreFunc = score();
    
    // Question objects:
    var question1 = new Question('What is most important?', ['1. Money', '2. Time', '3. Love'], 2);

    var question2 = new Question('Where should you be?', ['1. Past', '2. Present', '3. Future'], 2);

    var question3 = new Question('How do you improve?', ['1. Exercise', '2. Books', '3. Courage', '4. All'], 4);

    // Array storing questions:
    var questions = [question1, question2, question3];

    // Call to print question
    nextQuestion();
})();
