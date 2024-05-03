//enviando um alerta
alert('Alerta enviado de uma página externa');

//inserindo texto no paragrafo pelo Id
document.getElementById("texto").innerHTML="texto por <b>getElementById innerHTML</b>";
console.log("Isso é um console.log");

/*declarações são maneiras de escrever em JS
function exemplo para com serie de declarações formando um bloco de código*/
function minhafuncao(){
    document.write("escrita exemplo");
    document.write("2+2=");
    document.write(2+2);
    document.write(exemplo);
}

/*sintaxe:  String são "Palavras" ex:"1", agora numeros sao sem as aspas ex: 5+5*/

/*
var - pode ser redeclarada/ redefinida
let - é uma variavel única, pode ser redeclarada apenas em escopo {}
const- constante não muda em lugar nenhum
*/

//declaração de variaveis
var a,b,c;
var nome, sobrenome, nomeCompleto;
//atribuição dos valores
var a=2;
var b=3;
var c=a+b;
alert("a soma das variaveis é: " + c)


nome="Jóse";
sobrenome="Pereira"
nomeCompleto= nome+" "+sobrenome

document.getElementById("texto").innerHTML=nomeCompleto;

/* operadores
incrmento ++ um numero à mais, decremento -- uma valor a menos
+= para atribuir o valor mais a proxima declaração
-= para  o valor mais a proxima declaração
== operador de comparação true or false, usado muito em lógica
=== irá verificar se o valor e o tipo são os mesmos 
? e : ternario, para condição: && e || ou
*/

//funções
function soma(valor1, valor2){
    return valor1 + valor2
}

function realparadolar(real,cotacaodolar) {
    return real*cotacaodolar
}

var real=10
var cotacaodolar=5.08

var total = realparadolar(10, 5.08);

document.getElementById("texto").innerHTML=soma(10,15);
alert("o valor em real é R$: " + real + " o valor em dolar é $: " + total);

function Celsius(fahrenheit){
    return (5/9) * (fahrenheit - 32);
}

var x = Celsius(68);

alert("a temperatura é de " + x + " graus Celsiys");

//objetos são muito uteis para colocar coleçoes/ conjuto de informaçoes dentro de uma variavel só, ou funçoes dentro de um onjeto

const carro = {
    marca:"ford",
    modelo:"ka",
    ano:2015,
    placa:"abc1234",
    //metodo:
    buzina: function() {alert("biiiiiiiiiii")},
    completo: function(){
        return "a marca é " +this.marca+ " e o modelo é: " +this.modelo;
    }
};

//pode ser passado o metodo do objeto atraves de []
//para chamar a funçao objeto.funçao
console.log(carro.ano);
carro.buzina();
console.log(carro.completo());

/* Eventos

onclick - disparado quando recebe um click
onblclick - click duplo
onmouseover - quando o mouse esta sobre
onmouseout - quando sai do elemento
onmousemove - quando o mouse é movido no elemento
onmousedown - quando foi precionado
onmouseup - quando o click do botao é solto
onfocus - quando o elemento recebe o foco, ex: input
onchange - quando muda o conteudo
onblue - quando perde o foco
onkeydown - quando apertar uma tecla
onkeypress- quando apertar a tecla e soltar
onkeyup - quando solta uma tecla
onload - quando uma pagina termina de carregar
onresize - quando redimensionada da tela
*/

function eventoClick(){
    alert("Acionou um evento de click"); 
}
 
function eventodbl(){
    document.body.style.backgroundColor="rgb(255, 255, 123)";
} 

function movemouse(){
    document.body.style.backgroundColor="white";
}

/*onmouseover
onmouseout 

onmousedown
onmouseup
onfocus
onchange
onblur 
onkeydown
onkeypress
onkeyup 
onload 
onresize*/


