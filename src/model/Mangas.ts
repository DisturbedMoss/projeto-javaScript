export abstract class Manga{
    private _id: number;
    private _titulo: string;
    private _autor: string;
    private _preco: number;
    private _quantidade: number;

    constructor(id: number, titulo: string, autor: string, preco: number, quantidade: number){
        this._id = id;
        this._titulo = titulo;
        this._autor = autor;
        this._preco = preco;
        this._quantidade = quantidade;
    }

    public get id(){
        return this._id;
    }
    public set id(id: number){
        this._id = id;
    }

    public get titulo() {
    return this._titulo;
    }
    public set titulo(titulo: string) {
        this._titulo = titulo;
    }

    public get autor() {
        return this._autor;
    }
    public set autor(autor: string) {
        this._autor = autor;
    }

    public get preco() {
        return this._preco;
    }
    public set preco(preco: number) {
        this._preco = preco;
    }

    public get quantidade() {
        return this._quantidade;
    }
    public set quantidade(quantidade: number) {
        this._quantidade = quantidade;
    }

    //Métodos

    public retirar(qtd: number): boolean {
        if(this._quantidade < qtd){
            console.log("\nIndisponível no estoque.");
            return false;
        }
        this._quantidade -= qtd;
        return true;
    }

    public adicionar(qtd: number): void {
        this._quantidade += qtd;
    }

    public visualizar(): void {
        console.log(`\n****************************`);
        console.log(`Estoque Mangá Mania\n`);
        console.log(`****************************`);
        console.log(`ID do Mangá: ${this._id}`);
        console.log(`Título: ${this._titulo}`);
        console.log(`Autor: ${this._autor}`);
        console.log(`Preço: R$ ${this._preco.toFixed(2)}`);
        console.log(`Quantidade: ${this._quantidade}`);
    }
}