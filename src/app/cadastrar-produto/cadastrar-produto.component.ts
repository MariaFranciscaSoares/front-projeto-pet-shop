import { Component, OnInit } from '@angular/core';
import { Produto } from './model/produto.module';
import { ProdutoService } from './adapter/ProdutoService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {
  produto: Produto = new Produto; // Instância do ProdutoVO a ser enviada
  nome: boolean = false;
  descricao: boolean = false;
  quantidade: boolean = false;
  preco: boolean = false;
  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {

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
    Swal.fire('Sucesso!', 'Produto Cadastrado com Sucesso.', 'success');
  }

  exibirMensagemDeErro() {
    Swal.fire('Erro!', 'Ocorreu Algum Erro no Cadastro do Produto.', 'error');
  }

}
