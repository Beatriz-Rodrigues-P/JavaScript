//Biblioteca para entrada de usuário
const leia=require("readline-sync")

//Inserir idade - números inteiros
let idade
//Esta variável do while serve para continuar a pesquisa com mais usuários
let continuar="S"

//Valores de menores e maiores de
let menorde21=0
let maiorde50=0


//Base de início da pesquisa
while(continuar==="S"){
    idade=leia.questionInt("\nQual sua idade? ")

    //Laço condicional - if else - para menores e maiores da idade equivalente
    if(idade<21){
        menorde21++
    }else if(idade>50){
        maiorde50++
    }
    continuar=leia.question("Continuar pesquisa? ").toUpperCase()
}

//Estrutura de saída de resultado
console.log(`\nTotal de pessoas menores de 21 anos: ${menorde21}`)
console.log(`Total de pessoas maiores de 50 anos: ${maiorde50}`)

process.exit(0)