const imprimir = function(impressao){
  console.log(impressao);
}

imprimir("Olá Mundo");

// function calcularSoma(valor1, valor2){
//   return valor1 + valor2;
// }

const valor1 = 2;
const valor2 = 4;
const calcularSoma = function(valor1, valor2){
  return valor1 + valor2;
}

imprimir(`A soma entre ${valor1} e ${valor2} é ${calcularSoma(valor1, valor2)}`);

const nomeCompleto = function(primeiro_nome, sobrenome_do_meio, sobrenome)
{
    console.log("Seu nome completo é", primeiro_nome, sobrenome_do_meio, sobrenome);
}

const nomeCompleto_2 = (primeiro_nome, sobrenome_do_meio, sobrenome) =>{
  console.log("Seu nome completo é", primeiro_nome, sobrenome_do_meio, sobrenome);
}

nomeCompleto("Fulano","Beltrano","da Silva");
nomeCompleto_2("Nome1","Nome2","Nome3");