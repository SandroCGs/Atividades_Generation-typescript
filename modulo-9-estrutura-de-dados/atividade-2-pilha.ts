/*
Escreva um programa contendo uma Collection Stack (Pilha) 
de Objetos string, para organizar a retirada de livros de uma pilha. 
O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
1: Adicionar um novo livro na pilha. Deve solicitar o nome do livro.
2: Listar todos os livros da Pilha
3: Retirar um livro da pilha 
0: O programa deve ser finalizado. 
Caso a pilha esteja vazia, ao tentar retirar um livro da pilha, 
o programa deverá informar que a pilha está vazia.
*/

import { Stack } from "./Stack";
import * as readlinesync from "readline-sync";

const pilha = new Stack<String>();

const livrosArray: Array<String> = new Array<string>();

let opcao = 0;

do {
    console.log("\n1 - Adicionar Livro na pilha\n2 - Listar todos os Livros\n3 - Retirar Livro da pilha\n0 - Sair");
    opcao = readlinesync.questionInt("Entre com a opcao desejada: ", 
            {limitMessage: "Digite um numero!\n"}
        );
    switch(opcao){
        case 0:
            //fecha aplicação
            console.log("\nFechando aplicação..\n");
            break;
        case 1:
            //adiciona livro a pilha
            let livro = readlinesync.question("\nDigite o nome do livro para entrar na pilha:");
            pilha.push(livro);
            break;
        case 2:
            //listar livros
            if (pilha.isEmpty() != true){
                console.log("\nLista de livros na pilha: ");
                //print da pilha oritinal
                pilha.printStack();
                
                /*
                while(pilha.isEmpty() != true){
                    let livro = pilha.pop();
                    if (livro !== undefined){
                        livrosArray.push(livro);
                    }
                }
    
                //print da string teste
                console.log("\nlivros do array: ");
                for(let i = livrosArray.length-1; i >= 0; i--){               
                        console.log(livrosArray[i]);
                }
    
                for(let i = livrosArray.length; i >= 0; i--){
                    let livro = livrosArray[i];
                    if (livro !== undefined){
                        pilha.push(livro);
                    }
                }

                //print da pilha refeita0
                console.log("\nlivros da pilha depois de voltar");
                pilha.printStack();
                */
            
            } else 
                console.log("\nPilha vazia.\n");
            break;

        case 3:
            //retirar livros
            if (pilha.isEmpty() == true)
                console.log("\nA pilha está vazia!\n");
            else {
                pilha.pop();
                console.log("\nUm Livro foi retirado da pilha!");
            }
            break;

        default:
            console.log("\nValor inválido.\n");
    }

} while(opcao != 0);
