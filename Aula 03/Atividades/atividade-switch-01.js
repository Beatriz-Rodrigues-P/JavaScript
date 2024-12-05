//Biblioteca para ler a entrada do usuário
const leia=require("readline-sync")

//Dados do usuario
let nome=leia.question("Digite seu nome: ")

console.log("\nCargos")
console.log("1- Gerente        ")
console.log("2- Vendedor       ")
console.log("3- Supervisor     ")
console.log("4- Motorista      ")
console.log("5- Estoquista     ")
console.log("6- Tecnico de TI  ")
let cargo=leia.questionInt("Digite seu codigo: ")
//Por ser salário, o valor pode ser quebrado, portanto, Float
let salario=leia.questionFloat("Digite seu salario: ")
let reajuste=0

//Switch Case
switch(cargo){
    case 1:
        reajuste=0.10
        break
    case 2:
        reajuste=0.07
        break
    case 3:
        reajuste=0.09
        break
    case 4:
        reajuste=0.06
        break
    case 5:
        reajuste=0.05
        break
    case 6:
        reajuste=0.08
        break
    default:
        console.log("Codigo invalido!")                   
}

//Conta para reajuste salarial
novosalario=salario+(reajuste*salario)

console.log(`Salario atualizado: R$ ${novosalario.toFixed(2)}`)

process.exit(0)