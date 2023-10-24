import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario.module';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl = 'http://localhost:8080/usuario'; // Substitua pela URL do seu servidor Spring Boot

  constructor(private http: HttpClient) { }

  incluirUsuario(usuario: Usuario): Observable<any> {
    const url = `${this.baseUrl}/incluir`;
    return this.http.post(url, usuario);
  }
}