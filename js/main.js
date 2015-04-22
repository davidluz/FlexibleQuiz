$( document ).ready(function() {

var respostaAtual;
var questaoAtual = 1;
var respostas1 = 0;
var respostas2 = 0;
var respostas3 = 0;
var respostas4 = 0;
var colorDefault = "#000000";
var colorClick =  "#4183D7";

function resetAlternatives (){
$(".respostas").css("color", colorDefault);
}

$( "#resposta1" ).click(function() {
resetAlternatives ();
$("#resposta1").css("color", colorClick);
respostaAtual = 1;
});

$( "#resposta2" ).click(function() {
resetAlternatives ();
$("#resposta2").css("color", colorClick);
respostaAtual = 2;
});

$( "#resposta3" ).click(function() {
resetAlternatives ();
$("#resposta3").css("color", colorClick);
respostaAtual = 3;
});

$( "#resposta4" ).click(function() {
resetAlternatives ();
$("#resposta4").css("color", colorClick);
respostaAtual = 4;
});

 
function responder(){
if(respostaAtual==1){
respostas1 = respostas1+1;
}

if(respostaAtual==2){
respostas2 = respostas2+1;
}

if(respostaAtual==3){
respostas3 = respostas3+1;
}

if(respostaAtual==4){
respostas4 = respostas4+1;
}
proximaPergunta();
} 



function proximaPergunta(){

respostaTemp = " \"#questao"+questaoAtual+"\"";
$(eval(respostaTemp)).hide();
questaoAtual = questaoAtual+1;
respostaTemp = " \"#questao"+questaoAtual+"\"";
$(eval(respostaTemp)).fadeIn();
}

$("#ri-btn-enviar").click(function() {
responder();
});


 
 
}); //<-- Fim da ready


