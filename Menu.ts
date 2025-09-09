import { MangaFisico } from './src/model/MangaFisico';
import leia = require("readline-sync");
import { Manga } from "./src/model/Mangas";
import { MangaDigital } from "./src/model/MangaDigital";
import { MangaController } from './src/controller/MangaController';

export function main(){

    let mangas: MangaController = new MangaController();

    let opcao: number;

    //id, titulo, autor, preco, quantidade

    const mangaFisico: MangaFisico = new MangaFisico(1, "One Piece", "Eiichiro Oda", 39.90, 100, 500);
    mangaFisico.visualizar();
    mangaFisico.retirar(10);
    mangaFisico.visualizar();
    mangaFisico.adicionar(20);
    mangaFisico.visualizar();
    mangaFisico.retirar(1000);

    const mangaDigital: MangaDigital = new MangaDigital(2, "Berserk", "Kentaro Miura", 29.90, 200, 50);
    mangaDigital.visualizar();
    mangaDigital.retirar(10);
    mangaDigital.visualizar();
    mangaDigital.adicionar(20);
    mangaDigital.visualizar();
    mangaDigital.retirar(1000);

    while(true){
        console.log("\n****** Menu Mangá Mania ******\n");
        console.log("1 - Cadastrar Mangá");
        console.log("2 - Listar Mangás");
        console.log("3 - Excluir Mangá");
        console.log("4 - Editar Mangá");
        console.log("5 - Buscar Mangá");
        console.log("6 - Sair");
        console.log("\n******************************\n");

        console.log("Escolha a opção desejada: ");
        opcao = leia.questionInt("");

        if(opcao === 6){
            console.log("\nSaindo do Sistema...");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\nMangá Cadastrado com Sucesso!");
                break;

            case 2:
                console.log("\nListando Mangás...");
                mangas.listarTodos();
                break;

            case 3:
                console.log("\nMangá Excluído com Sucesso!");
                break;

            case 4:
                console.log("\nMangá Editado com Sucesso!");
                break;

            case 5:
                console.log("\nMangá Encontrado com Sucesso!");
                break;

            default:
                console.log("\nOpção inválida! Tente novamente.");
                break;
        }

    }
}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Sistema de Cadastro de Mangás - /-/ Mangá Mania /-/");
    console.log("Desenvolvido por: Vitor Hugo");
    console.log("github.com/DisturbedMoss");
    console.log("Versão: 1.0.0");
    console.log("*******************************************************\n");
}

main();