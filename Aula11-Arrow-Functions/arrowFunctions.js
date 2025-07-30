// Declaração de função que causa Hoisting
// function calcularSoma(valor1, valor2){
//   return valor1 + valor2;
// }

// Declaração de função que não causa Hoisting
// const calcularSoma = function(valor1, valor2){
//   return valor1 + valor2;
// }

/* A função pode ter nome, exemplo

Mas geralmente não é muito necessário, é melhor deixar o nome só em const ou let

let calcularSoma3 = function somando(valor1, valor2){
  return valor1 + valor2;
}

console.log(calcularSoma3(4,5));
*/

// Função arrow que recebe dois valores
const calcularSoma = (valor1, valor2) => valor1 + valor2;

const valor1 = 10;
const valor2 = 20;

const resultadoSoma = calcularSoma(valor1, valor2);

console.log(`Resultado da soma de ${valor1} + ${valor2}: ${resultadoSoma}`);

const imprimir = impressao => console.log(impressao);

imprimir("Olá Mundo");