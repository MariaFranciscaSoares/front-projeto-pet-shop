import { Component, OnInit, createComponent } from '@angular/core';
import { Usuario } from './model/usuario.module';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  //public usuarios: Usuario[] = [];
  public usuario: Usuario = {
    id: 1,
    usuario: "Fran",
    nome: "string",
    email: "string",
    telefone: "string",
    cpf: "string",
    endereco: "string",
    numero: 1,
    cep: "string",
    dataNasc: new Date(),
    sexo: "Masculino",
    funcao: "string",
    dataAdmissao: new Date(),
  };

constructor() { }

ngOnInit(): void {
}

Masculino = '/assets/usuarioHomem.png';
Feminino = '/assets/usuarioMulher.png';

}

