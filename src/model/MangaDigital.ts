import { Manga } from "./Mangas";

export class MangaDigital extends Manga{
    private _tamanhoArquivo: number; //em MB

    constructor(id: number, titulo: string, autor: string, preco: number, quantidade: number, tamanhoArquivo: number){
        super(id, titulo, autor, preco, quantidade);
        this._tamanhoArquivo = tamanhoArquivo;
    }

    public get tamanhoArquivo() {
        return this._tamanhoArquivo;
    }
    public set tamanhoArquivo(tamanhoArquivo: number) {
        this._tamanhoArquivo = tamanhoArquivo;
    }

    public visualizar(): void {
        console.log(`\n\nTipo: Digital`);
        super.visualizar();
        console.log(`Tamanho do Arquivo: ${this._tamanhoArquivo}MB`);
        console.log(`****************************`);
    }
}