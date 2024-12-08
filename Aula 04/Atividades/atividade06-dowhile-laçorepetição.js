//Biblioteca para entrada de usuários
const leia=require("readline-sync")

//Variáveis para entrada de usuários até o 0
let numero
let contador=0
let soma=0
let mediaf

//Do While - descobrir os múltiplos de 3 e fazer a soma se forem diferentes de 0
do{(numero=leia.questionInt("\nDigite um numero: "))
    if (numero%3===0 && numero!==0){
        soma+=numero
        contador++
    }
}while(numero!==0)

//Descobrir a média final dos números que são múltiplos de 3
if (contador>0){
    mediaf=soma/contador
    console.log("\nA média final dos números múltiplos de 3 é: ", mediaf)
}else{
    console.log("\nNão há múltiplos de 3 nesta lista!")
}

process.exit(0)