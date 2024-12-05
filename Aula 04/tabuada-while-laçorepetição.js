const leia=require("readline-sync")

let contador=1
let numero=leia.question("Digite um numero: ")

while(contador<=10){
    console.log(`${numero}x${contador}=${numero*contador}`)
    contador++
}