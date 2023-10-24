import { Produto } from "src/app/lista-produtos/model/produto.module";


export class VendaModel {
    public id!: number;
    public produto!: Produto;
    public quantidade!: number;
    public subtotal!: string;
    public data!: string;
}

export class DadosVenda {
    venda: Venda = new Venda();
    produtos!: Produtos[];


}

export class Venda {
    idVenda!: number;
    dataVenda!: string;
    idVendedorFk!: string;
}

export class Produtos {
    idProduto!: number;
    quantidade!: number;
}