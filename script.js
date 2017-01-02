var playing = true;
function Question(question, choice, answer) {
    this.question = question;
    this.choice = choice;
    this.answer = answer; 
};
//Object methods (available through the prototype)
Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for(var i = 0; i<this.choice.length; i++) {
        console.log(this.choice[i]);
    }
}

Question.prototype.checkAnswer = function() {
    var ans = prompt('Choose a number! or press exit to quit');
    if(parseInt(ans) === this.answer) {
        console.log('Correct!');
    } else if(ans === 'exit') {
        playing = false;
    } else {
        console.log('Incorrect!');
    }
}

Question.prototype.displayScore = function() {
    console.log('Your score is:'+score);
}

var question1 = new Question('What is most important?', ['1. Money', '2. Time', '3. Love'], 2);

var question2 = new Question('Where should you be?', ['1. Past', '2. Present', '3. Future'], 2);

var question3 = new Question('How do you improve?', ['1. Exercise', '2. Books', '3. Courage' '4. All'], 4);

var questions = [question1, question2, question3];

while(playing) {
    var randNum = Math.floor(Math.random()*3); 
    questions[randNum].displayQuestion(); 
    questions[randNum].checkAnswer();
    questions[randNum].displayScore();
}

