const notasFinais = [
  {nome: "Beatriz", nota: 5},
  {nome: "Matheus", nota: 7},
  {nome: "Amanda", nota: 10},
  {nome: "Paula", nota: 5},
]

// for (let i = 0; i < notasFinais.length; i++){
//   if (notasFinais[i].nota >= 6){
//     console.log(`O index ${notasFinais[i].nome} está aprovado com ${notasFinais[i].nota}`)
//   } else {
//     console.log(`O index ${notasFinais[i].nome} está reprovado com ${notasFinais[i].nota}`)
//   }
// }

// for (let index of notasFinais){
//   if (index.nota >= 6){
//     console.log(`O aluno ${index.nome} está aprovado com ${index.nota}`)
//   } else {
//     console.log(`O aluno ${index.nome} está reprovado com ${index.nota}`)
//   }
// }

// index = aluno

notasFinais.forEach((index) => {
  if (index.nota >= 6){
    console.log(`O aluno ${index.nome} está aprovado com ${index.nota}`)
  } else {
    console.log(`O aluno ${index.nome} está reprovado com ${index.nota}`)
  }
});