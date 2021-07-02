//Minhas primeiras anotações de instruçôes de códico para a imersão da CubosAcademy

console.log("Olá, Mundo!");
console.log("Olá, Juliana!");

// como calcular valores ao quadrado, sempre lembrar das aspas, pq?
var altura = 1.80;
var massa = 60;
var imc = massa / (altura * altura);
console.log(imc);

// como criar 'objetos'/grupos, os valores são de uma variável só, logo, para utilizá-los: variável.valor
const pessoa = {
  nome: 'Maria',
  idade: 21,
  ehMaiorDeIdade: true
};
 
 // como usar if/else if e else;
 // if: primeira condicional
 // else if: segunda condicional em diante
 // else: caso não seja nenhum dos ifs
 if (pessoa.idade < 18){
   console.log('É menor de idade');
 } else if (pessoa.idade < 60){
   console.log('É adulto(a)');
 } else {console.log('É idoso(a)')
 }

// como concatenar com string template:
nome = 'Juliana'
idade = 21
temPassaporte = false

console.log(`${nome} tem ${idade} anos e ${altura} de altura`);

// operadores lógicos:
// && (se x coisa E x coisa...)
// || (se x coisa OU x coisa)
// ! (negação, usado mais em valores booleanos)

//Exemplo: idade e altura mímimos para brincar no parque

if (idade > 12 && altura > 1.40){console.log("Pode brincar! :)")} else {console.log('Não pode brincar :(')}

// negação: (se for falso...)
if (!temPassaporte){console.log('Não pode viajar!')}

// arrays, para imprimir é só usar o número da posição/indice na qual está o valor da lista (a primeira posição/indice é contada como 0 e a ultima é sempre o tamanho do array --)
const listaDeCompras = ['Arroz', 'Feijão', 'Batata'];
console.log(listaDeCompras[0])
console.log(listaDeCompras[1])
console.log(listaDeCompras[2])

// loops while (enquanto) para repetição de números
let numero = 0;
while (numero <= 100) { //esta condição existir
  console.log(numero); 
  numero++; // isso aqui vai acontecer enquanto
  }

  //exemplo da lista de compras (para utilização de valores em string e outros/indice, o ''lenght'' significa comprimento e define o mesmo como o limite da repetição):
  //OBS: indicado para melhor localização de algum item da lista
  //instruções: 
  let indice = 0; //começar ato com 0
while (indice < listaDeCompras.length) { //ver se é menor que o comprimento
  console.log(listaDeCompras[indice]);
  indice++; // somar 1 para ir para o próx. indice
  }

// loop for (dica de uso: para quando sabe até quando o loop será feito)
for (indice = 0; indice < listaDeCompras.length; indice++) {console.log(listaDeCompras[indice])
}

// outro tipo de for, para quando não houver necessidade de saber algum item da array
for (let item of listaDeCompras) {
  console.log (item);
}

// mas como achar/saber algum item da lista? Basta colocar um if perguntando se há
for (let item of listaDeCompras) {
  if (item === 'Arroz')
  console.log ('Tem Arroz na lista!');
}

// mas há um problema na forma de verificação acima, pois continua verificando todos os item mesmo depois de encontrar o solicitado, gerando um indevido processamento, para isso, usamos o ''break'''
for (let item of listaDeCompras) {
  console.log("Verificando item: " + item);
  if (item === 'Feijão') {
  console.log ('Tem Feijão na lista!');
  break;
  }
}

// na forma abaixo ele imprime uma lista com o que foi posto no .push
const resultado = [];
resultado.push("Cereal", "Leite");
console.log(resultado);
// na forma abaixo ele retira algo do final usando o .pop
resultado.pop();
console.log(resultado);


// como filtrar um item de uma lista usando alguma letra do item e comandos "push" (coloca algo no final) e "pop" (tira algo do final)
const listaFeira = ["Macarrão", "Farofa", "Frango"];
for (item of listaFeira){ 
if (item[0] === "M"){ // item[0] se refere a primeira letra, como se o conjunto de letras da palavra fosse um array e cada letra um indice
  resultado.push(item);
}
}
console.log(resultado);

/*funções:
- primeiro declaramos 
- damos um nome que diga o que ela faz e apenas  que faz 
- até aí ela apenas vai guardar a função a ser feita*/
function imprimirOiNaTela(){
  console.log("Oi!")
}
/* para ser executada devemos:*/
imprimirOiNaTela(); // é como dar play na função
console.log("Olá!") //teste para saber se após outra ação, a função ainda é executada
imprimirOiNaTela();

// funções com parametros
function cumprimentarPessoa(nome){ // o (nome) é o parametro no qual será definido ao ser chamado, age como uma variável mas que só existe dentro da função, logo não pode ser utilizada fora dela**
  console.log("Olá! " + nome);
}
cumprimentarPessoa("Brunno ;)"); // chamado/ativação da function
cumprimentarPessoa("Juliana"); // pode ser usado mais de uma vez
// ex**: 
console.log(nome); // não vai imprimir nada de dentro da função

// exercícos
