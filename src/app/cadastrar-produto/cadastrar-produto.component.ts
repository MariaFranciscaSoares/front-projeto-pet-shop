import { Component, OnInit } from '@angular/core';
import { Produto } from './model/produto.module';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  produto: Produto = new Produto();

  constructor() { }

  ngOnInit(): void {
  }

  salvarProduto(){
    
  }

}
