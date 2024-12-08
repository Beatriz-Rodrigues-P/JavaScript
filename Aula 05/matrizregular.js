const leia=require("readline-sync")

let matrizinteiros=new Array(3)

for(let indice=0; indice<matrizinteiros.length; indice++){
    matrizinteiros[indice]=Array(3)
}

for(let indicelinha=0; indicelinha<matrizinteiros.length; indicelinha++){
    for(let indicecoluna=0; indicecoluna<matrizinteiros.length; indicecoluna++){
        matrizinteiros[indicelinha][indicecoluna]=leia.questionInt("Digite um numero: ")
    }
}

console.table(matrizinteiros);
