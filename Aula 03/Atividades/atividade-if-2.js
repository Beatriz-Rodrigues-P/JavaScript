//Biblioteca para ler entrada de usuário
const leia=require("readline-sync")

//Pergunta de introdução
console.log("\nQuer saber se está apto a doar sangue? Informe seus dados abaixo.")

//Informações do usuário
let nome=leia.question("Digite o seu nome: ")
let idade=leia.questionInt("Qual sua idade? ")
let doar=leia.keyInYNStrict("Primeira doacao de sangue? true ou false: ")

//else if
if(idade>=18 && idade<=59){
    console.log(`\n ${nome}, você está apto para doar sangue!`)
}else if(idade>59 && !doar){
    console.log(`\n ${nome}, você está apto para doar sangue!`)
}else{
    console.log(`\n ${nome}, você não está apto para doar sangue!`)
}
process.exit(0)