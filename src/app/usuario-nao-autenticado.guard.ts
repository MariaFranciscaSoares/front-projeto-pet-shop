import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../app/login/adapter/UsuarioService';

@Injectable({
  providedIn: 'root'
})
export class UsuarioNaoAutenticadoGuard implements CanActivate {

  constructor(private usuarioService:UsuarioService,
    private router:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
    
    if(this.usuarioService.IsAuteticado){
      return true;
    }   

     this.router.navigate(['/login']);
     return false;
  }
  
}