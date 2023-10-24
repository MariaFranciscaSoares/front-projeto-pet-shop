import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/cadastrar-produto/model/produto.module';
import { DadosVenda, Produtos } from '../model/venda.module';

@Injectable({
  providedIn: 'root'
})
export class VendaService {
  private baseUrl = 'http://localhost:8080/vendas'; // Substitua pela URL do seu servidor Spring Boot

  constructor(private http: HttpClient) {}

  incluirVenda(venda: DadosVenda): Observable<any> {
    return this.http.post(`${this.baseUrl}/incluir`, venda);
  }
}