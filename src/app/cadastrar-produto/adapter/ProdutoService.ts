import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/cadastrar-produto/model/produto.module';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private baseUrl = 'http://localhost:8080/produto'; // Substitua pela URL do seu servidor Spring Boot

  constructor(private http: HttpClient) { }

  incluirProduto(produto: Produto): Observable<any> {
    return this.http.post(`${this.baseUrl}/incluir`, produto);
  }

  pesquisarPorId(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.baseUrl}/pesquisarPorId/${id}`);
  }

}