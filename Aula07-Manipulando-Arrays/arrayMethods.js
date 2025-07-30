const listaDeConvidados = ["Rosa", "Marieta", "Aurelina", "Robério"]; 

// Push / Pop / Shift / Unshift
console.log(listaDeConvidados);
listaDeConvidados.pop(); // remove o último item do array
console.log(listaDeConvidados);
listaDeConvidados.push("Anderson"); // adiciona no final do array
console.log(listaDeConvidados);
listaDeConvidados.unshift("Santos") // adiciona como 1º do array
console.log(listaDeConvidados);
listaDeConvidados.shift(); // remover o primeiro item da lista

console.log(listaDeConvidados);
console.log("Paula está na lista? ", listaDeConvidados.includes("Paula"));