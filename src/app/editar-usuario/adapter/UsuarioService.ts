import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario.module';


@Injectable({
    providedIn: 'root',
})
export class UsuarioService {
    private apiUrl = 'http://localhost:8080/usuario';

    constructor(private http: HttpClient) { }

    pesquisarPorId(id: number): Observable<Usuario> {
        return this.http.get<Usuario>(`${this.apiUrl}/pesquisarPorId/${id}`);
    }

    alterarPorId(usuario: Usuario): Observable<any> {
        const id = usuario.idUsuario;
        const url = `${this.apiUrl}/alterar/${id}`;
        return this.http.put(url, usuario);
    }

    alterarStatusPorId(usuario: Usuario): Observable<any> {
        const id = usuario.idUsuario;
        const url = `${this.apiUrl}/alterarStatus/${id}`;
        return this.http.put(url, usuario);
    }
}