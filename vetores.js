/*exercicio 1-vetores- EXEMPLO1
let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (i = 10; i <= newArray.length; i--) {
  console.log([i])
  if (i <= 0) {
    //returnfalse
    break;
  }
}*/


/*exercicio 1-vetores- EXEMPLO2 com metodo reverse
 let newArray = [1,2,3,4,5,6,7,8,9,10]
 let arrayReverse = newArray.reverse()
 const vetor = arrayReverse.map((valor) =>{
   console.log(valor)

 } )
*/


/*exercicio 2-vetores- EXEMPLO1
const novoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
const mapeando = novoArray.map((valor,posicao) => {
    if(posicao % 2 == 0){
    return valor *2
}
return valor *3
})
console.log(mapeando)


/*exercicio 2-vetores- EXEMPLO2- usando for
const novoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,]
let save = []

for (i = 0; i < novoArray.length; i++) {
     if (i % 2 === 0) {
       save.push(novoArray[i] * 2);
     }
     if (i % 2 === 1) {
       save.push(novoArray[i] * 3);
     }
console.log(save) */


/*exercicio 3-vetores 
const vetorInte = [1,-2,3,-4,5,-6,7,8]
const vetorPosi = []
const vetorNegati = []

const mapeando = vetorInte.map((value)=>{
  if(value < 0){
    vetorNegati.push(value)
  } if (value > 0){
    vetorPosi.push(value)
  }
})
console.log(vetorPosi)
console.log(vetorNegati)*/


/*exercicio 4-vetores
let arrayNovo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
let arrayReverse = arrayNovo.reverse()
console.log(arrayReverse)*/


/*exercicio 5-vetores 
let vetorUm = [1, 2, 4, 6, 8, 10, 12, 14, 16, 18]
let vetorDois = [3, 5, 7, 9, 11, 13, 15, 17, 19, 20]
let vetorTres = []

for (i = 0; i <= 10; i++) {
  if (vetorUm[i]) {
    vetorTres.push(vetorUm[i]);
  }
  if (vetorDois[i]) {
    vetorTres.push(vetorDois[i]);
  }
}
console.log(vetorTres) */



/*exercicio 6-vetores 
let algoritmo = [10, 7, 7, 8, 5, 1, 3, 6.4, 2, 0, 3, 10, 9, 2, 9, 8, 7, 1, 1, 0, 5, 4, 4, 2, 1, 0, 9, 6.6, 5, 8, 10, 1, 7, 9, 8, 4, 1, 5, 2, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let media = 7
let valorInicial = media - (media * 10) / 100
let valorFinal = media + (media * 10) / 100
let contador = 0

for (i = 0; i < algoritmo.length; i++) {
  if (algoritmo[i] > valorInicial && algoritmo[i] < valorFinal) {
    contador++
  }
}
console.log(contador)*/


/*exercicio 7-vetores - 
const salario = 400
const arrayCodigo = []
const arrayValor = []
const arrayQuantidade = []

let maiorValor = 0
let maiorCodigo = 0
let maiorQuantidade = 0

for(i = 0; i < 3; i++){
    let codigo = Number(prompt("Digite o codigo do produto: "))
    let valor = parseInt(prompt("Digite o valor do produto: "))
    let quantidade = Number(prompt("Digite a quantidade do produto: "))

    arrayCodigo.push(codigo)
    arrayValor.push(valor)
    arrayQuantidade.push(quantidade)
}

let valorTotalVendido = arrayValor.reduce((acumulador, valorAtual, posicao)=> acumulador + (valorAtual * arrayQuantidade[posicao]),0)

let comissao = ( valorTotalVendido * 5) / 100

for (i = 0; i < arrayCodigo.length; i++) {
    
    console.log(`Codigo: ${arrayCodigo[i]} Quantidade: ${arrayQuantidade[i]} Valor: R$${arrayValor[i]} Total: R$${arrayValor[i] * arrayQuantidade[i]}`)

    if(maiorQuantidade < arrayQuantidade[i]){
        maiorValor = arrayValor[i]
        maiorCodigo = arrayCodigo[i]
        maiorQuantidade = arrayQuantidade[i]
    }
}
console.log(`Comissao R$${comissao}
Produto mais vendido Codigo: ${maiorCodigo} e Valor: R$${maiorValor} `)*/


/*exercicio 8-vetores
let recebeCusto = [];
let recebePreco = [];

for (i = 0; i < 1; i++) {
  let nomeDoProduto = prompt("Digite o nome do produto");
  let custoDoProduto = Number(prompt("Digite o custo"));
  let precoDoProduto = Number(prompt("Agora digite o preço"));

  recebeCusto.push(custoDoProduto);
  recebePreco.push(precoDoProduto);
}
for (i = 0; i < recebePreco.length; i++) {
  let lucro = recebePreco[i] - recebeCusto[i]; // 20 - 10
  let margemDeLucro = lucro / recebePreco[i]; // 20 / 10
  let resultado = (margemDeLucro * 100).toFixed(1); // 2  * 100

  if (resultado < 10) {
    console.log(`Seu lucro total menor: ${resultado}%`);
  }
  if (resultado > 10 && resultado < 30) {
    console.log(`Seu lucro total entre 10% e 30%: ${resultado}%`);
  }
  if (resultado > 30) {
    console.log(`Seu lucro total maior que: ${resultado}%`);
  }
}*/


/*exercicio 9-vetores
let vetorPonts = []
let vetorNome = []

for(i = 0; i < 200; i++){ 
let pontuacao = parseInt(prompt('Digite sua pontuação')) 
let nome = prompt('Digite seu nome')

vetorPonts.push(pontuacao)
vetorNome.push(nome)
}

for(i = 0; i < vetorNome.length; i++){
  if(vetorPonts[i] > 70){
    console.log(`Você está na lista de colocados! 
    Nome:${vetorNome[i]},Pontuação:${vetorPonts[i]}`)
  }
}*/


/*exercicio 10 -vetores
let temp = true
let vetorInt = [10,91,2,8,5,6,70,80,9,10]
for(let i = 0; i < vetorInt.length; i++){ 
if( vetorInt[i] > 50){
 temp = false
  console.log(`Número: ${vetorInt[i]},Posição: ${i+1}` )
} 
}if(temp){
  console.log('nenhum número que atenda a esta condição')
}*/



/*exercicio 11 -vetores
 let contadorNotas = 0;
const alternativas = ["A", "B", "C", "D", "A", "B", "C", "D"];
const gabarito = ["A", "C", "C", "D", "A", "B", "C", "D"];
let vetorAluno = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const listaDeNotasAlunas = [];

for (var i = 0; i < 10; i++) {
  let notas = [];
  for (var j = 0; j < 4; j++) {
    let indice = Math.floor(Math.random() * 8);
    notas.push(alternativas[indice]);
  }
  listaDeNotasAlunas.push(notas);
}

for (var i = 0; i < listaDeNotasAlunas.length; i++) {
  contadorNotas = 5;
  for (var j = 0; j < listaDeNotasAlunas[i].length; j++) {
    if (listaDeNotasAlunas[i][j] === gabarito[j]) {
      contadorNotas++;
    }
  }
  console.log(` Número do aluno:${vetorAluno[i]}
      ACERTOU!${contadorNotas}`);
  if (contadorNotas >= 6) {
    console.log(`  
    Sua nota: ${contadorNotas}
     Está acima da média!Sua porcentagem de aprovação ${
       contadorNotas + (contadorNotas * 8) / 100
     }
     `);
  } else {
    console.log(`número do aluno:${vetorAluno[i]} reprovado`);
  }
  console.log("==============");
}*/



/*exercicio 12 -vetores
let vetor = [9, 18, 17, 16, 15, 14, 13, 12, 11, 20, 0, 1, 2, 3, 4, 5, 6, 7, 8, 19,]

let resposta;
do {
  let condicao = true;
  resposta = Number(prompt("informe um valor para fazer a verificação se este valor está presente no vetor ou não" ))

  for (let i = 0; i < vetor.length; i++) {
    if (resposta == vetor[i]) {
      condicao = false;
      console.log(`este valor está presente no vetor: ${resposta}`);
    }
  }

  if (condicao) {
    console.log(`este valor não está presente no vetor: ${resposta} `);
  }
} while (resposta >= 0);
*/


/*exercicio 13 -vetores 
let nomeClientes = ["Joana", "Maria", "Felipe", "Joao", "Camila", "Gabriela", "Guilherme", "Ana"]
let quantidadeDVDs = [10, 7, 15, 9, 11, 12, 1, 100]

for (i = 0; i < nomeClientes.length; i++) {

  if (quantidadeDVDs[i] >= 10) {
    console.log(`Nome do cliente:${nomeClientes[i]} e sua quantidade de locações ${parseInt(quantidadeDVDs[i] / 10)}`)
  }
}*/


/*exercicio 14 -vetores
let count = 0
let vetorA = [1, 2, 2, 3, 4, 5, 6, 7, 8, 9]

for (i = 0; i < vetorA.length; i++) {
  for (j = i + 1; j < vetorA.length; j++) {
    if (vetorA[j] === vetorA[i]) {
      count++
      console.log(`Os numeros repetidos são ${vetorA[i]}`)
      console.log((`quantas vezes cada um se repete ${count}`))
    }
  }
}*/


/*exercicio 15 -vetores 
let vetorCarro = []
let vetorConsumo = []
let quilometros = []

for (let i = 0; i < 2; i++) {
  let carros = prompt("Digite cinco modelos de carros")
  let consumo = Number(prompt("Digite o consumo"))

  vetorCarro.push(carros)
  vetorConsumo.push(consumo)
}
let numMenor = 9999
let carroMenor = ""

for (let i = 0; i < vetorConsumo.length; i++) {

  if (vetorConsumo[i] < numMenor) {
    numMenor = vetorConsumo[i]
    carroMenor = vetorCarro[i]
  }
}
console.log(`O modelo de carro mais economico é ${carroMenor} ${numMenor}`)
for (i = 0; i < vetorConsumo.length; i++) {
  quilometros.push(1000 / vetorConsumo[i])
  console.log(`O ${vetorCarro[i]} consome ${quilometros[i]} litros de combustível para percorrer uma distância 
  de 1.000 quilômetros.`)
} */



/*exercicio 16 -vetores
let vetor = [4, 3, 10, 5, 19, 20, 17, 16, 1, 7, 9, 8, 0, 30, 29, 44, 31, 40, 50,];
let indice = 0;
let vetorCrescente = [];
let menorNumero;

while (vetor.length > 0) {
  menorNumero = vetor[0];

  for (i = 0; i < vetor.length; i++) {
    if (vetor[i] <= menorNumero) {
      menorNumero = vetor[i];
      indice = i;
    }
  }
  vetorCrescente.push(menorNumero);
  vetor.splice(indice, 1);

}

//console.log(`TESTANDO  ${vetor}`);
console.log(vetorCrescente);
console.log(`O elemento do vetor que apresenta o menor valor é ${vetorCrescente[0]}`);*/




/*exercicio 17 -vetores
let vetor = [15, 13, 10, 1, 4, 7, 14, 12, 3, 2, 11, 9, 5, 6, 8];
let aux = 0

for (i = 0; i < vetor.length; i++) {
  for (j = i; j < vetor.length; j++) {
    aux = 0

    if (vetor[i] >= vetor[j]) {
      aux = vetor[i]
      vetor[i] = vetor[j]
      vetor[j] = aux
    }
  }
} console.log(vetor)*/
