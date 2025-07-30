// Escopo

// Escopo Global
// Escopo de Bloco
// Escopo de Função

/*
    Essas variaveis de bloco e de função me lembram variaveis locais em C
*/

const x = 'variavel global';

// escopo de bloco
if (x){
  const z = 'variavel de bloco'
  console.log("X é: ", x);
  console.log("Z é: ", z);
}

// escopo de funcao
const funcao = () =>{
  const a = 'variavel do escopo da funcao'
  console.log("Na função, A é", a);
}

funcao();

// Hoisting