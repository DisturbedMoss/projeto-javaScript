import { Manga } from "../model/Mangas";
import { MangaRepository } from "../repository/MangaRepository";

export class MangaController implements MangaRepository {

    private _listaMangas: Array<Manga> = new Array<Manga>();

    cadastrar(manga: Manga): void {
        this._listaMangas.push(manga);
        console.log(`\nMangá ${manga.titulo} cadastrado com sucesso!`);
    }
    deletar(id: number): void {
        throw new Error("Method not implemented.");
    }
    listarTodos(): void {
        for(let manga of this._listaMangas){
            manga.visualizar();
        }
    }
    buscarPorId(id: number): Manga | undefined {
        throw new Error("Method not implemented.");
    }
    atualizar(id: number, manga: Manga): Manga | undefined {
        throw new Error("Method not implemented.");
    }
    retirar(qtd: number): boolean {
        throw new Error("Method not implemented.");
    }
    adicionar(qtd: number): void {
        throw new Error("Method not implemented.");
    }
    
}