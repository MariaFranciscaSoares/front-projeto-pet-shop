import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../lista-produtos/adapter/ProdutoService';
import { Produto } from '../lista-produtos/model/produto.module';
import { DadosVenda, Produtos, VendaModel } from './model/venda.module';
import { VendaService } from './adapter/efetuarVendaAdapter';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-efetuar-venda',
  templateUrl: './efetuar-venda.component.html',
  styleUrls: ['./efetuar-venda.component.css']
})
export class EfetuarVendaComponent implements OnInit {

  public listaVendas: VendaModel[] = [];
  produtos: Produto[] = [];
  produtoSelecionado!: Produto;

  produtosDadosVenda: Produtos[] = [];
  produtoDadosVenda: Produtos = new Produtos();
  dadosVenda: DadosVenda = new DadosVenda();
  quantidade: number = 0;
  usuario: string = "1";

  constructor(private produtoService: ProdutoService, private vendaService: VendaService) { }

  ngOnInit(): void {
    this.produtoService.getProducts().subscribe((data) => {
      this.produtos = data;
      console.log(data)
    });

  }



  public adicionarVenda(): void {
    const novaVenda = new VendaModel();
    novaVenda.produto = this.produtoSelecionado;
    novaVenda.quantidade = this.quantidade;
    novaVenda.subtotal = (this.produtoSelecionado.preco * this.quantidade).toFixed(2);
    novaVenda.data = this.formatarData(new Date());
    this.listaVendas.push(novaVenda);
  }

  public formatarData(date: Date) {
    const dia = date.getDate();
    const mes = date.getMonth() + 1; // Os meses em JavaScript são base 0
    const ano = date.getFullYear();

    const dataFormatada = `${ano}-${mes}-${dia}`;
    return dataFormatada;
  }

  buscarProduto(produto: Produto) {
    this.produtos.forEach((p) => {
      if (p.idProduto = produto.idProduto) {
        this.produtoSelecionado = p;
      }
    })
  }

  setProduto(produto: Produto) {
    this.produtoSelecionado = produto;
  }

  public excluirProduto(venda: VendaModel): void {
    console.log("cheguei aqui")
    this.listaVendas = this.listaVendas.filter(v => v.produto.idProduto != venda.produto.idProduto);
  }

  finalizarVenda() {
    this.setDadosVenda();
    this.incluirVenda();
  }

  setDadosVenda() {

    this.dadosVenda.venda.idVenda = this.listaVendas[0].id;
    this.dadosVenda.venda.dataVenda = this.listaVendas[0].data;
    this.dadosVenda.venda.idVendedorFk = this.usuario;

    this.listaVendas.forEach((venda) => {

      this.produtoDadosVenda.idProduto = venda.produto.idProduto;
      this.produtoDadosVenda.quantidade = venda.quantidade;

      this.produtosDadosVenda.push(this.produtoDadosVenda);
    });

    this.dadosVenda.produtos = this.produtosDadosVenda;
  }

  incluirVenda() {
    console.log(this.dadosVenda)
    this.vendaService.incluirVenda(this.dadosVenda).subscribe(
      response => {
        this.exibirMensagemDeSucesso();
      },
      error => {
          this.exibirMensagemDeErro();
      }
    );
  }

  exibirMensagemDeSucesso() {
    Swal.fire('Sucesso!', 'Venda Finalizada com Sucesso.', 'success');
  }

  exibirMensagemDeErro() {
    Swal.fire('Erro!', 'Ocorreu Algum Erro na Finalização da Venda.', 'error');
  }

}



