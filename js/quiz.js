var questionCount=1;
var questions = []; //Armazena questões
var questionsLength = questions.length;

//Cria uma nova questão
questionGenerator = function (question,a,b,c,d,correct){
this.number = questionCount;
this.question = question;
this.a = a;
this.b = b;
this.c = c;
this.d = d;
this.correct = correct;
this.response = 0;
questionCount = questionCount +1;
}



//Adiciona questão ao Array QuestionPool
function addQuestion (question){
questions.push(question);
}

// Varre Array questions
function questionsSummary(){

for (var i = 0; i < questions.length; i++) {
    console.log(questions[i].number);
	console.log(questions[i].response);
}


}
