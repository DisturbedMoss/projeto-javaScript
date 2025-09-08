import leia = require("readline-sync");

export function main(){

    let opcao: number;

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
                console.log("\nMangá Listado com Sucesso!");
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