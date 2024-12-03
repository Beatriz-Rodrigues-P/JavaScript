let nome="Beatriz"
let profissao="Desenvolvedora"

let salario=3500.50
const bonus=0.05

console.log("\nNome: ", nome)
console.log("Profissão: ", profissao)
console.log("Salário líquido: ", new Intl.NumberFormat(
    "pt-BR", {style: "currency", currency:"BRL",}).format(salario+(bonus*salario)))

// Interpolação de strings
console.log(`O salário do colaborador ${nome} é ${salario}`)

// console.log("Tipo da variável", typeof nome)

// nome=12

// console.log("\nNome: ", nome)
// console.log("Tipo da variável", typeof nome)