import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../login/model/usuario';
import { UsuarioService } from '../login/adapter/UsuarioService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:Usuario;

  constructor(private usuarioService:UsuarioService,
              private router:Router) { 
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }

  logar():void{    
    this.usuarioService.autenticar(this.usuario)
      .subscribe({
        next: retorno => this.tratarRetorno(retorno)
      })
  }

  private tratarRetorno(retorno: boolean):void{
    retorno ? this.router.navigate(['/cadastro-usuario']) : alert('Usuário e/ou senha inválidos');
  }
}