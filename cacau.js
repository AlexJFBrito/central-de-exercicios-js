function cacau() {



    let nomecerto = "alex"
    let nomedigitado;





    while (nomedigitado != nomecerto) {

        nomedigitado = prompt("Insira o nome do magnifico futuro esposo da cacau");

        nomedigitado = nomedigitado.toLowerCase(); // tratou o nomedigitado

        if (nomedigitado != nomecerto) {

            alert("Errou ! tente novamente:")

        } else {

            alert("Voce acertou ! Felicidades ao casal");

        }

    }

}

cacau();