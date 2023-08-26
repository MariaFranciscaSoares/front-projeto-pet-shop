import { Data } from "@angular/router";

export class Venda {
    public id!: number;
    public produto!: Produto;
    public quantidade: number = 0;
    public subtotal: string = "";
    public data: Data = new Date();
}

export class Produto {
    public id!: number;
    public nome!: string;
    public valor: number = 0.0;
    public quantidadeEstoque: number = 0;
}