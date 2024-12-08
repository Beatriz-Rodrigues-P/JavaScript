//Biblioteca para entrada do usuário para pesquisar um número
let leia=require("readline-sync")

//Valores da tabela
const numero=[2,5,1,3,4,9,7,8,10,6]
//Índice da tabela
let indice=new Array(10)
//Para iniciar o loop, o índice precia partir do início(0)
let indicel=0
//A priori, precisamos supor que o número não está na tabela
let localizado=false


//Apresentação dos números existentes na tabela
console.log("\nNúmeros da tabela:", numero.join(" | "))
//Solicitação ao usuário para digitar o número desejado
const numeroe=leia.questionInt("\nQual numero quer encontrar? ", numero)

//for para descobrirmos a quantidade de itens no Array. O length vai contar sempre a partir de 0, nesse caso, 9 itens
for(indicel=0; indicel<numero.length; indicel++){
    //Para saber o número encontrado (numeroe), é preciso pesquisar dentre os numeros (numero), qual a posição do selecionado (indicel)
    if(numero[indicel]==numeroe){
        console.log(`\nO número ${numeroe} está localizado na posição ${indicel}.`)
        //O algoritmo vai pesquisar se esse número está na lista, se estiver (true), vai indicar onde está
        localizado=true
        //Se fez a localização, o break faz parar a procura
        break
    }
}

//if para caso o usuário insira um número que não está na lista
if(!localizado){
    //Se não foi localizado, então, a mensagem:
    console.log(`\nO número ${numeroe} não está localizado na tabela.`)
}

console.table(numero)