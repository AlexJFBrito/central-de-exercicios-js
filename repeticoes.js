function exemploFor() {

    // FOR
    // 1o = Declarar contador.
    // 2o = Condição (enquanto).
    // 3o = Incremento.
    for (let contador = 1; contador <= 10; contador++) {

        alert(contador);

    }

}



function exemploWhile() {

    let contador = 1;

    while (contador <= 5) {

        console.log(contador);
        contador++;

    }


}

function exemploDoWhile() {

    let contador = 1;

    do {

        alert(contador);
        contador++;

    } while (contador <= 5);

}




function tabuada() {

    // FOR
    // 1o = Declarar contador.
    // 2o = Condição (enquanto).
    // 3o = Incremento.


    let numero = prompt("Insira um numero:");

    let soma;

    for (let contador = 1; contador <= 10; contador++) {

        soma = numero * contador;

        alert(numero + "x" + contador + "=" + soma);

    }

}


function naturais() {

    let n = prompt("Insira um numero:");
    let soma = 0;
    let i = 1;

    while (i <= n) {
        soma += i;
        i++;
    }

    alert("A soma dos primeiros " + n + " números naturais é: " + soma);


}


function pares() {

    for (let contador = 1; contador <= 50; contador++) {

        if (contador % 2 == 0) {
            console.log(contador)
        }
    }

}

function adivinhacao() {

  

    let numerogerado = Math.floor(100 * Math.random() + 1);

    let numeroinserido;

    while (numerogerado != numeroinserido) {

        numeroinserido = prompt("Escolha um número:");

        if (numerogerado < numeroinserido) {

            alert("O numero inserido é menor.")

        } else if (numerogerado > numeroinserido) {

            alert("O numero inserido é maior.")

        } else {

            alert("Voce acertou !");

        }

    }

}

adivinhacao


function contagemregressiva() {

    let numeroinserido;

    numeroinserido = prompt("insira um numero")

    for (let numeroinserido = 0; numeroinserido < 0; numeroinserido--) {

        const element = array[numeroinserido];

    }
}

function soma (){

    let valor;
    
    valor = prompt("Insira um valor:")
    
    soma = valor
        .toString()
        .split('')
        .map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0);

alert(soma);


}



