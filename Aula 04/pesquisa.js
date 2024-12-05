const leia=require("readline-sync")

let idade, 
    esporte, 
    futebol=0, 
    voleimaiores18=0, 
    basquetemenores18=0, 
    outros=0
    continua='S'

while(continua==='S'){
    idade=leia.questionInt("\nDigite sua idade: ")

    // Validação simples de dados
    do{
        esporte=leia.questionInt("Digite o esporte favorito (1-Futebol/2-Volei/3-Basquete/4-Outros): ")

        if(esporte<1||esporte>4)
        console.log("Digite um número entre 1 e 4")

    }while(esporte<1||esporte>4)
    
    if(esporte===1){
        futebol++
    }

    if(esporte===2 && idade>18){
        voleimaiores18++
    }

    if(esporte===3 && idade<18){
        basquetemenores18++
    }

    if(esporte===4)
        outros++

    continua=leia.question("Deseja continuar (S/N)? ").toUpperCase()
}

console.log(`\nTotal de pessoas que gostam de futebol: ${futebol}`)
console.log(`Total de pessoas que gostam de voleibol e são maiores de 18 anos: ${voleimaiores18}`)
console.log(`Total de pessoas que gostam de basquetebol e são menores de 18 anos: ${basquetemenores18}`)
console.log(`Total de pessoas que gostam de outros esportes: ${outros}`)