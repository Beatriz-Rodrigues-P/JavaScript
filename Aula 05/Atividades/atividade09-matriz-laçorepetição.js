const leia=require("readline-sync")

//Números da matriz bidimensional
const numeros=[]
//Definido a quantidade de índices
let array=new Array(3)
//Para iniciar o loop
let indice
//Definir linhas
let linha
//Definir colunas
let coluna
//Declaração de diagonais e somas das mesmas
let diagonalp=[]
let somadp=0
let diagonals=[]
let somads=0
let indicedps

//for para descobrirmos a quantidade de itens na matriz
for(indice=0; indice<array.length; indice++){
    (array[indice]=Array(3))
}

//Pra construir a matriz bidimensional, precisamos saber o que terá em cada linha
for(linha=0; linha<array.length; linha++){
    //Pra construir a matriz bidimensional, precisamos saber o que terá em cada coluna
    for(coluna=0; coluna<array.length; coluna++){
        //Agora vamos inserir em cada linha e coluna um número para construir a Array
        array[linha][coluna]=leia.questionInt("Insira um numero: ")
    }
}

//Apresenta a tabela preenchida
console.table(array)

//Para identificar e somar a diagonal principal, é necessário adicionar(push) os dados
for(indicedps=0; indicedps<array.length; indicedps++){
    diagonalp.push(array[indicedps][indicedps])
    somadp+=array[indicedps][indicedps]
    //Para identificar e somar a diagonal secundária, é necessário adicionar(push) os dados
    diagonals.push(array[indicedps][array.length-1-indicedps])
    somads+=array[indicedps][array.length-1-indicedps]
}

//Saída com os números e as somas
console.log("\nNúmeros da diagonal principal:", diagonalp.join(", ")) 
console.log("A soma dos números da diagonal principal totaliza: ", somadp)

console.log("\nNúmeros da diagonal secundária:", diagonals.join(", ")) 
console.log("A soma dos números da diagonal principal totaliza: ", somads)
