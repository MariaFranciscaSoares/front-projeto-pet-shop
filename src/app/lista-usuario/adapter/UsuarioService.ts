import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../model/lista-usuario.module';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl = 'http://localhost:8080/usuario'; // Substitua pela URL do seu servidor Spring Boot

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseUrl}/trazerTodos`);
  }
}