do{
    //mostrar o menu
    //opção 1 sacar
    //opção 2 depositar
    //opção 3 Mostrar saldo

    //receber a entrada do usuário
    var opcao=2

    switch (opcao){
        case 1:
            //perguntar o valor do saque
            var valorSaque=20
            if(valorSaque<=saldo){
                saldo-=valorSaque
                //Libera o money
            }else{
                //Tá duro, dorme
            }
            break
        case 2:
            //perguntar o valor que vai depositar
            var valordeposito=5
            //validar se o dinheiro tá safe
            saldo+=valordeposito;
            break
        case 3:
            //mostrar o valor do saldo
            break
    }

    //Nesses casos pode usar tanto o switch quanto o if else. Eu prefiro switch

    if(opcao==1){
    
    }else if(opcao==2){
    
    }else{(opcao==3)}
}while(condiçao)