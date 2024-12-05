//Biblioteca para ler entrada de valores do usuário
const leia=require("readline-sync")

//Ler os valores
var A=leia.questionInt("\nDigite o valor de A: ")
var B=leia.questionInt("Digite o valor de B: ")
var C=leia.questionInt("Digite o valor de C: ")

//else if
if(A+B>C){
    console.log("\nA soma de A+B é maior que C")
}else if(A+B<C){
    console.log("\nA soma de A+B é menor que C")
}else{
    console.log("\nA soma de A+B é igual a C")
}

process.exit(0)