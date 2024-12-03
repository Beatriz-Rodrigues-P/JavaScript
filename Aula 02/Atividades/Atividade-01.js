const leia=require("readline-sync")

//Valores
var salario;
var abono;

//Leia o salario e o abono
salario=leia.questionFloat("\nDigite o salario: ", salario)
abono=leia.questionFloat("Digite o abono: ", abono)

//Conta para o novo salario
let novosalario=salario+abono
var real=new Intl.NumberFormat("pt-BR", {style: "currency", currency:"BRL",});

//Exibe o novo salario
console.log("O salario atualizado é: ", real.format(novosalario))