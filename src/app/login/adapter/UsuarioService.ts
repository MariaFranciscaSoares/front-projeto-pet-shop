import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private isAuteticado: boolean;

  constructor(private httpClient: HttpClient) {
    this.isAuteticado = false;
  }

  autenticar(usuario:Usuario):Observable<boolean> {
    /*const endpoint = '';
    this.httpClient.get<boolean>(endpoint);*/
    return this.mockAutenticarAPI(usuario)
      .pipe(tap(retorno => this.isAuteticado = retorno))
  }

  private mockAutenticarAPI(usuario: Usuario):Observable<boolean>{
    
    if (usuario.Login === 'a' && usuario.Senha === '123') 
       return of(true);
        
     
    return of(false);
  } 

  get IsAuteticado():boolean{
    //console.log("Auteticado?" + this.isAuteticado);
    return this.isAuteticado;
  }
}