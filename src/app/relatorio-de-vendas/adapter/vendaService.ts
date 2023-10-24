import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemVenda } from '../model/itemVenda.module';

@Injectable({
  providedIn: 'root'
})
export class ItemVendaService {
  private apiUrl = 'http://localhost:8080/vendas'; 

  constructor(private http: HttpClient) { }

  getItensVenda(): Observable<ItemVenda[]> {
    return this.http.get<ItemVenda[]>(`${this.apiUrl}/trazerTodos`);
  }
}