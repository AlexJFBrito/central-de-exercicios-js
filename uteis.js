function filter01() {

    let numeros = [1, 2, -50, 25, 90, 100, 80, -20, -90, -85];

    let numerosfiltrados = numeros.filter(numero => numero > 5);

    console.log("Numeros filtrados : " + numerosfiltrados);



}



// Filtrar nomes que começam com a letra 'A'

function nomes() {

    let nomes = ["Alex", "João", "Maria", "Roger", "Amanda", "Bruno", "Barbara"];
    let nomesComA = nomes.filter(nome => nome.startsWith("A"));
    console.log(nomesComA);


}


// Filtrar produtos com preço menor que R$50

function produtos() {


    let produtos = [
        { nome: "Teclado", preco: 120 },
        { nome: "Mouse", preco: 40 },
        { nome: "Fone de ouvido", preco: 80 },
        { nome: "Caderno", preco: 30 }
    ];
    let produtosBaratos = produtos.filter(produto => produto.preco < 50); // Use filter aqui
    console.log(produtosBaratos); // Deve retornar [{ nome: "Mouse", preco: 40 }, { nome: "Caderno", preco: 30 }]

}



function itens() {


    const produtos = [
        { id: 1, nome: "Teclado", preco: 100 },
        { id: 2, nome: "Mouse", preco: 50 },
        { id: 3, nome: "Monitor", preco: 700 }
    ];

    // Procurar o produto com preço 700
    const produtoCaro = produtos.find(produto => produto.preco == 700);
    console.log(produtoCaro); // { id: 3, nome: "Monitor", preco: 700 }


}


function amanda() {


    const nomes = ["João", "Carlos", "Amanda", "Arthur", "Beatriz"];
    const amanda = nomes.find(nome => nome == "Amanda");
    console.log(amanda); // Deve retornar "Amanda"

}

function ID (){



const listaDeUsuarios = [
    { id: 1, nome: "Alice" },
    { id: 2, nome: "Bruno" },
    { id: 3, nome: "Carla" }
  ];
  
  const usuarioEncontrado = listaDeUsuarios.find(usuario => usuario.id == 2);
  
  console.log(usuarioEncontrado); 
  // Deve retornar { id: 2, nome: "Bruno" }

}
  
  

