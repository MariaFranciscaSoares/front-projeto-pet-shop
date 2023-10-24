import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto.module';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private baseUrl = 'http://localhost:8080/produto'; // Substitua pela URL do seu servidor Spring Boot

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.baseUrl}/trazerTodos`);
  }

  excluirPorId(id: number): Observable<Produto> {
    return this.http.delete<Produto>(`${this.baseUrl}/excluir/${id}`);
  }

}