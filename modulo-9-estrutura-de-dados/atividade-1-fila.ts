/* 
Escreva um programa contendo uma Collection Queue (Fila) de Objetos do tipo 
string, para organizar uma fila por ordem de chegada dos Clientes de um Banco. 
O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
1: Adicionar um novo Cliente na fila. Deve solicitar o nome do Cliente.
2: Listar todos os Clientes na fila
3: Chamar (retirar) uma pessoa da fila 
0: O programa deve ser finalizado. 
Caso a fila esteja vazia, o programa deverá informar que a fila está vazia 
ao tentar retirar (chamar) um cliente da fila.
*/

/*
Acho que a sequencia
clr = readlinesync.question("## Aperte enter para voltar ##");
console.clear();
deixou o código bem poluído e funcionaria melhor como uma função ou método
mas visualmente no terminal fica melhor para visualizar
*/

import { Queue } from "./Queue";
import * as readlinesync from "readline-sync";

const fila = new Queue<string>();
let opcao = 0;
let clr: string;

do{
    console.log(
        "**************************************************\n" +
        "                                                  \n" +
        "        1 - Adicionar Clientes na Fila            \n" +
        "        2 - Listar Todos os Clientes              \n" +
        "        3 - Retirar Cliente da Fila               \n" + 
        "        0 - Sair                                  \n" +
        "                                                  \n" +
        "**************************************************"
    );
    opcao = readlinesync.questionInt("Entre com a opcao desejada: ", 
        {limitMessage: "Digite um numero!\n"}
    );

    console.clear();

    switch (opcao) {
        case 0:
            console.log("\n\nEncerrando a aplicação...\n");
            break;
        case 1:
            //1 - Adicionar Clientes na Fila
            let nome = readlinesync.question("Nome do cliente para inserir na fila: ");
            fila.enqueue(nome);
            console.clear();

            //console.log("Fila: ");//
            //fila.printQueue();
            console.log("\nCliente adicionado!\n\n");
            
            clr = readlinesync.question("## Aperte enter para voltar ##");
            console.clear();
            break;
        case 2:
            if (fila.isEmpty() == true){
                console.log("\nSem clientes na fila.\n\n");
                clr = readlinesync.question("## Aperte enter para voltar ##");
                console.clear();
            } else {
                console.log("\nLista de Clientes na Fila:\n");
                fila.printQueue();
                clr = readlinesync.question("\n\n## Aperte enter para voltar ##");
                console.clear();
            }
            break;
        case 3:
            if(fila.isEmpty() == true){
                console.log("\nA Fila está vazia!\n\n");
                clr = readlinesync.question("## Aperte enter para voltar ##");
                console.clear();
            }
            else {
                fila.dequeue();
                console.log("\nO Cliente foi Chamado!\n");
                //console.log("\nFila: ");
                //fila.printQueue();
                clr = readlinesync.question("\n\n## Aperte enter para voltar ##");
                console.clear();
            }
            break;
        default:
            console.log("\nDigite um valor válido!\n\n");
            clr = readlinesync.question("## Aperte enter para voltar ##");
            console.clear();
    }

} while(opcao != 0);