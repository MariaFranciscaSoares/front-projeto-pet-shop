import { Component, OnInit } from '@angular/core';
import { Usuario } from './model/lista-usuario.module';
import { UsuarioService } from './adapter/UsuarioService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {
  usuarios: Usuario[] = [];
  filtroIdUsuario: string = '';
  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.buscarUsuarios();
  }

  buscarUsuarios() {
    this.usuarioService.getProducts().subscribe((data) => {
      this.usuarios = data;
      console.log(data)
    });
  }
  
  editarUsuario(idUsuario: number) {
    localStorage.setItem('userId', idUsuario.toString());
    this.router.navigate(['editar-usuario']);
  }

  aplicarFiltro() {
    if (this.filtroIdUsuario) {
      this.usuarios = this.usuarios.filter(venda =>
        venda.idUsuario.toString().includes(this.filtroIdUsuario)
      );
     
    } else {
      this.buscarUsuarios();
    }
}


}



