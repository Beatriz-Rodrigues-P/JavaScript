const leia=require("readline-sync")

let vetorStrings=["Boxer", "Pastor Alemao", "Pincher", "Husky Siberiano", "Corgi"]

let vetoresinteiros=new Array(5)

let vetornumeros=[7,5,9,1,3,2,6,4,8,10]

for(let contador=0; contador<vetorStrings.length; contador++){
    console.log(vetorStrings[contador])
}

console.log("\nO tamanho do vetor de strings é: ", vetorStrings.length)

//for(let contador=0; contador<vetorStrings.length; contador++){
//    vetoresinteiros[contador]=leia.questionInt("Digite um numero: ")
//}

console.table(vetoresinteiros)

console.table(vetorStrings.sort())

console.table(vetornumeros.sort((a,b)=>a-b))