import { Manga } from "./Mangas";

export class MangaFisico extends Manga{
    private _peso: number; //em gramas

    constructor(id: number, titulo: string, autor: string, preco: number, quantidade: number, peso: number){
        super(id, titulo, autor, preco, quantidade);
        this._peso = peso;
    }

    public get peso() {
        return this._peso;
    }
    public set peso(peso: number) {
        this._peso = peso;
    }

    public visualizar(): void {
        console.log(`\n\nTipo: Físico`);
        super.visualizar();
        console.log(`Peso: ${this._peso}g`);
        console.log(`****************************`);
    }
}