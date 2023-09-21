import { Component, OnInit } from '@angular/core';
import { Usuario } from './model/lista-usuario.module';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor() {
    const usuario1 = new Usuario();
    usuario1.codigo = 1;
    usuario1.nome = 'Bruno';
    usuario1.cpf = '000.000.000-00';
    usuario1.perfil = 'Gerente';
    usuario1.departamento = 'Gerencia';
    usuario1.situacao = 'Ativo';

    const usuario2 = new Usuario();
    usuario2.codigo = 2;
    usuario2.nome = 'Ana Clara';
    usuario2.cpf = '000.000.000-00';
    usuario2.perfil = 'Funcionária';
    usuario2.departamento = 'Comercial';
    usuario2.situacao = 'Ativo';

    // Adicione os objetos Usuario à lista de usuários
    this.usuarios.push(usuario1, usuario2);
  }

  ngOnInit(): void {
    
  }

  editarUsuario(usuario: Usuario) {
    // Implemente a lógica de edição aqui
  }

  excluirUsuario(usuario: Usuario) {
    // Implemente a lógica de exclusão aqui
  }
}






