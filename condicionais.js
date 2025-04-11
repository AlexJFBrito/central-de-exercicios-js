function exercicio01() {

    let numero = prompt("Digite um numero");


    if (numero > 0) {

        alert("Positivo.");

    } else {

        if (numero < 0) {

            alert("Negativo.");

        } else {
            alert("È zero.");

        }

    }

    gerarLog("Exercicio 01 executado ás " +  new Date().toLocaleString());

}



function exercicio02() {
    let numero = prompt("Digite um numero");

    if (numero % 2 == 0) {

        alert("O numero inserido é PAR");

    } else {

        alert("o numero inserido é IMPAR")
    }
    gerarLog("Exercicio 02 executado ás " +  new Date().toLocaleString());

}




function exercicio03() {


    let numero = prompt("Digite sua idade");
    if (numero < 18) {

        alert("voce é menor de idade");
    } else

        alert("voce é maior de idade")


}

function exercicio04() {

    let numero = prompt("Digite um número:");

    if (numero > 0) {

        alert("O numero é positivo.");

    } else
        alert("O numero é negativo");

}


function exercicio05() {

    let numero = prompt("Insira a nota do aluno:");
    if (numero >= 60) {
        alert("Aprovado");

    } else
        alert("Reprovado");

}


function exercicio06() {


    let numero = prompt("Insira a sua idade:");

    if (numero <= 12) {

        alert("Criança");

    } else if (numero >= 13 && numero <= 17) {

        alert("Adolescente");

    } else if (numero >= 18) {

        alert("Adulto")


    }
}


function exercicio07() {



    let numero1 = prompt("Digite o primeiro número:");
    let numero2 = prompt("Digite o segundo número:");
    let operacao = prompt("Digite a operação (+, -, *, /):");

    let resultado;

    if (operacao === "+") {
        resultado = numero1 + numero2;
    } else if (operacao === "-") {
        resultado = numero1 - numero2;
    } else if (operacao === "*") {
        resultado = numero1 * numero2;
    } else if (operacao === "/") {
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
        } else {
            resultado = "Erro: divisão por zero!";
        }
    } else {
        resultado = "Operação inválida!";
    }

    alert("Resultado: " + resultado);


}


function exercicio08() {



    let n1 = prompt("Digite o primeiro número:");
    let n2 = prompt("Digite o segundo número:");
    let n3 = prompt("Digite o terceiro número:");

    let maior;

    if (n1 > n2 && n1 > n3) {

        maior = n1;


    } else if (n2 > n1 && n2 > n3) {

        
        maior = n2;
    
    } else if (n3 > n1 && n3 > n2) {


        maior = n3


    }


  
    alert("O maior número inserido é:" + maior);

}

function gerarLog(textoDoLog) {


    let logsContainer = document.querySelector(".logs-container");
    let paragraph = document.createElement("p");
    paragraph.innerHTML = textoDoLog;
    logsContainer.appendChild(paragraph);
}


 


