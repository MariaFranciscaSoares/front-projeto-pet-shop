import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ProdutoService } from '../cadastrar-produto/adapter/ProdutoService';
import { Produto } from '../cadastrar-produto/model/produto.module';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {
  produto: Produto = new Produto; // Instância do ProdutoVO a ser enviada
  nome: boolean = false;
  descricao: boolean = false;
  quantidade: boolean = false;
  preco: boolean = false;
  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.getIdProduto();
  }

  getIdProduto() {
    let id = localStorage.getItem('produtoId');
    localStorage.removeItem('produtoId');

    if (id != "" && id != null) {
      this.buscarProdutoPorId(id);
    }

  }

  buscarProdutoPorId(id: any) {
    this.produtoService.pesquisarPorId(id).subscribe((data: Produto) => {
      this.produto = data;
      console.log(data)
    });
  }

  salvarProduto() {
    if (this.validaProduto()) {
      this.produtoService.incluirProduto(this.produto).subscribe(
        (response: any) => {
          this.exibirMensagemDeSucesso();
        },
        (error: any) => {
          this.exibirMensagemDeErro();
        }
      );
    }
  }

  validaProduto() {
    this.nome = this.produto.nome == "";
    this.descricao = this.produto.descricao == "";
    this.quantidade = this.produto.quantidade == 0;
    this.preco = this.produto.preco == 0;

    if (this.produto.nome == "" || this.produto.descricao == ""
      || this.produto.quantidade == 0 || this.produto.preco == 0) {
      return false;
    }

    return true;

  }


  exibirMensagemDeSucesso() {
    Swal.fire('Sucesso!', 'Produto Alterado com Sucesso.', 'success');
  }

  exibirMensagemDeErro() {
    Swal.fire('Erro!', 'Ocorreu Algum Erro na Alteração do Produto.', 'error');
  }

}
