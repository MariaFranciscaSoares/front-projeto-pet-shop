import { Component, OnInit, createComponent } from '@angular/core';
import { Usuario } from './model/usuario.module';
import { UsuarioService } from './adapter/UsuarioService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {


  public usuario: Usuario = new Usuario;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.getIdUsario();
  }

  getIdUsario() {
    let id = localStorage.getItem('userId');
    localStorage.removeItem('userId');

    if (id != "" && id != null) {
      this.buscarUsuarioPorId(id);
    }

  }

  buscarUsuarioPorId(id: any) {
    this.usuarioService.pesquisarPorId(id).subscribe((data: Usuario) => {
      this.usuario = data;
      console.log(data)
    });
  }

  editarUsuario() {
    this.usuarioService.alterarPorId(this.usuario)
      .subscribe(
        (response) => {
          this.exibirMensagemDeSucesso('Usuário Editado com Sucesso.');
        },
        (error) => {
          this.exibirMensagemDeErro('Ocorreu Algum Erro na Edição do Usuário.');
        }
      );
  }

  alterarStatus(value: string) {
    this.usuario.status = value;
    this.usuarioService.alterarStatusPorId(this.usuario)
      .subscribe(
        (response) => {
          this.exibirMensagemDeSucesso('Usuário ' + value + ' com Sucesso');
        },
        (error) => {
          this.exibirMensagemDeErro('Ocorreu Algum Erro na Edição do Status do Usuário.');
        }
      );
  }

  Masculino = '/assets/usuarioHomem.png';
  Feminino = '/assets/usuarioMulher.png';

  exibirMensagemDeSucesso(mensagem: string) {
    Swal.fire('Sucesso!', mensagem, 'success');
  }

  exibirMensagemDeErro(mensagem: string) {
    Swal.fire('Erro!', mensagem, 'error');
  }

}

