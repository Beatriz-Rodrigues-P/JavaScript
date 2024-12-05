//Biblioteca para entrada de usuário
const leia=require("readline-sync")

//Informações de valores
let n1=leia.questionInt("\nDigite o seu primeiro numero: ")
let n2=leia.questionInt("Digite o seu segundo numero: ")

//Laço condicional: o 1º deve ser menor que o 2º número
if(n1<n2){
    console.log("\nO primeiro número é menor que o segundo!")
}else{
    console.log("\nIntervalo inválido!")
    process.exit(0)
}

//frase para introduzir aos múltiplos de 3 e 5
console.log("\nOs múltiplos de 3 e 5 localizados neste intervalo são: ")

//Laço de repetição - for - para saber os múltiplos de 3 e 5
for(let contador=n1; contador<=n2; contador++){
    //Módulo
    if(contador%3==0 && contador%5==0){
        console.log(contador)
    }
}

process.exit(0)