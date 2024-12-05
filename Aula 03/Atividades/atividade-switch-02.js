//Biblioteca para ler a entrada do usuário
const leia=require("readline-sync")

//Dados do pedido
console.log("\nItens do cardapio")
console.log("1- Cachorro quente ")
console.log("2- X-Salada        ")
console.log("3- X-Bacon         ")
console.log("4- Bauru           ")
console.log("5- Refrigerante    ")
console.log("6- Suco de laranja ")
let itens=leia.questionInt("Digite seus itens: ")
let quantidade=leia.questionInt("Digite quantos itens: ")
let preco=0

//Switch Case
switch(itens){
    case 1:
        preco=10.00
        break
    case 2:
        preco=15.00
        break
    case 3:
        preco=18.00
        break
    case 4:
        preco=12.00
        break
    case 5:
        preco=8.00
        break
    case 6:
        preco=13.00
        break
    default:
        console.log("Pedido invalido!")                   
}

//Conta para reajuste salarial
valort=quantidade*preco

console.log(`Pedido total: R$ ${valort.toFixed(2)}`)

process.exit(0)