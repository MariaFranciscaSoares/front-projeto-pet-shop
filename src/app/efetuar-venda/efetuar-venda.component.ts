import { Component, OnInit } from '@angular/core';
import { Produto, Venda } from './model/venda.module';

@Component({
  selector: 'app-efetuar-venda',
  templateUrl: './efetuar-venda.component.html',
  styleUrls: ['./efetuar-venda.component.css']
})
export class EfetuarVendaComponent implements OnInit {

  public listaVendas: Venda[] = [];
  produtos: Produto[] = [];
  produtoSelecionado: Produto = {
    id: 0,
    nome: "Selecione",
    valor: 0,
    quantidadeEstoque: 0,
  };

  quantidade: number = 0;


  constructor() {
    this.produtos = this.criarListaProdutosSimulada();
  }

  ngOnInit(): void {
  }

  private criarListaProdutosSimulada(): Produto[] {
    const listaProdutos: Produto[] = [];

    const nomesProdutos = [
      'Ração para Cães',
      'Ração para Gatos',
      'Brinquedo para Cães',
      'Brinquedo para Gatos',
      'Coleira para Cães',
      'Coleira para Gatos',
      'Camiseta para Cães',
      'Cama para Cães',
      'Cama para Gatos',
      'Shampoo para Cães',
    ];

    for (let i = 0; i < nomesProdutos.length; i++) {
      const produto = new Produto();
      produto.id = i + 1;
      produto.nome = nomesProdutos[i];
      produto.valor = Math.random() * 50 + 10; // Exemplo de valor aleatório
      produto.quantidadeEstoque = Math.floor(Math.random() * 50) + 10; // Estoque aleatório

      listaProdutos.push(produto);
    }
    return listaProdutos;
  }

  public adicionarVenda(): void {
    if (this.produtoSelecionado && this.quantidade > 0) {
      const novaVenda = new Venda();
      novaVenda.id = this.listaVendas.length + 1;
      novaVenda.produto = this.produtoSelecionado;
      novaVenda.quantidade = this.quantidade;
      novaVenda.subtotal = (this.produtoSelecionado.valor * this.quantidade).toFixed(2);
      novaVenda.data = new Date();
     // novaVenda.data = this.da

      this.listaVendas.push(novaVenda);

      // Limpar campos após adicionar a venda
      this.produtoSelecionado = new Produto();
      this.quantidade = 0;
    }
  }

  buscarProduto(produto: Produto) {
    this.produtos.forEach((p) => {
      if (p.id = produto.id) {
        this.produtoSelecionado = p;
      }
    })
  }

  setarProduto(produto: Produto) {
    this.produtoSelecionado = produto;
  }
}
