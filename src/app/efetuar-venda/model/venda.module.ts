export class Produto {
    public id!: number;
    public nome!: string;
    public valor: number = 0;
    public quantidadeEstoque: number = 0;
}

export class Venda {
    public id!: number;
    public produto!: Produto;
    public quantidade!: number;
    public subtotal!: string;
    public data!: string;
}