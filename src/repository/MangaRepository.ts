import { Manga } from "../model/Mangas";

export interface MangaRepository {
    //Crud
    cadastrar(manga: Manga): void;
    listarTodos(): void;
    deletar(id: number): void;
    buscarPorId(id: number): Manga | undefined;
    atualizar(id: number, manga: Manga): Manga | undefined;

    //Métodos adicionais
    retirar(qtd: number): boolean;
    adicionar(qtd: number): void;
}