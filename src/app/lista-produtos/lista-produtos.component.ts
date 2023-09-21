import { Component, OnInit } from '@angular/core';
import { Produto } from './model/produto.module';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {
  produtos: Produto[] = [];
  constructor() {
    this.produtos = this.criarListaProdutosSimulada();
    console.log(this.produtos)
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

    const descricaoProdutos: string[] = [
      'Ração premium para cães',
      'Ração de qualidade para gatos',
      'Brinquedo resistente para cães',
      'Brinquedo cativante para gatos',
      'Coleira confortável para cães',
      'Coleira elegante para gatos',
      'Camiseta moderna para cães',
      'Cama aconchegante para cães',
      'Cama aconchegante para gatos',
      'Shampoo de qualidade para cães',
    ];

    for (let i = 0; i < nomesProdutos.length; i++) {
      const produto = new Produto();
      produto.id = i + 1;
      produto.nome = nomesProdutos[i];
      produto.descricao = descricaoProdutos[i];
      produto.valor = parseFloat((Math.random() * 50 + 10).toFixed(2)); // Exemplo de valor aleatório
      produto.quantidadeEstoque = Math.floor(Math.random() * 50) + 10; // Estoque aleatório

      listaProdutos.push(produto);
    }
    return listaProdutos;
  }

}
