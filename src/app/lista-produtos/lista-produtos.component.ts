import { Component, OnInit } from '@angular/core';
import { Produto } from './model/produto.module';
import { ProdutoService } from './adapter/ProdutoService';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {
  produtos: Produto[] = [];
  constructor(private produtoService: ProdutoService, private router: Router) { }

  ngOnInit(): void {
    this.buscarProdutos();
  }

  buscarProdutos(){
    this.produtoService.getProducts().subscribe((data) => {
      this.produtos = data;
      console.log(data)
    });
  }

  alterarProduto(idUsuario: number) {
    localStorage.setItem('produtoId', idUsuario.toString());
    this.router.navigate(['editar-produto']);
  }

  excluirProduto(idUsuario: number) {
    this.produtoService.excluirPorId(idUsuario)
      .subscribe(
        (response: any) => {
          this.exibirMensagemDeSucesso();
          this.buscarProdutos();
        },
        (error: any) => {
          this.exibirMensagemDeErro();
        }
      );
  }

  exibirMensagemDeSucesso() {
    Swal.fire('Sucesso!', 'Produto Excluído com Sucesso.', 'success');
  }

  exibirMensagemDeErro() {
    Swal.fire('Erro!', 'Ocorreu Algum Erro na Exclusão do Produto.', 'error');
  }
}



