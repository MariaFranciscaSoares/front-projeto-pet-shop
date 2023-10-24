export class ItemVenda {
    id: number;
    idVendaFk: {
      idVenda: number;
      dataVenda: string;
      idVendedorFk: any; 
    };
    idProdutoFk: {
      idProduto: number;
      nome: string;
      descricao: string;
      quantidade: number;
      preco: number;
    };
    quantidade: number;
  
    constructor() {
      this.id = 0; 
      this.idVendaFk = {
        idVenda: 0, 
        dataVenda: '',
        idVendedorFk: null 
      };
      this.idProdutoFk = {
        idProduto: 0, 
        nome: '',
        descricao: '',
        quantidade: 0,
        preco: 0
      };
      this.quantidade = 0; 
    }
  }

  export class VendaConsolidada {
    idVenda!: number;
    dataVenda!: string;
    quantidadeProdutos!: number;
    valorTotal!: number;
  }