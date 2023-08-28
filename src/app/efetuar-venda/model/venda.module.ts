import { Data } from "@angular/router";

export class Venda {
    public id!: number;
    public produto!: Produto;
    public quantidade: number = 0;
    public subtotal: string = "";
    public data: string = "";
}

export class Produto {
    public id!: number;
    public nome!: string;
    public valor: number = 0;
    public quantidadeEstoque: number = 0;
}