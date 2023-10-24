import { Component, OnInit } from '@angular/core';
import { Usuario } from './model/usuario.module';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UsuarioService } from './adapter/UsuarioService';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  btntext!: string;

  cadastroUsuario!: FormGroup;

  Masculino = '/assets/usuarioHomem.png';
  Feminino = '/assets/usuarioMulher.png';
  public usuario: Usuario = new Usuario();

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService) { }
  ngOnInit(): void {
    this.cadastroUsuario = this.formBuilder.group({
      id: new FormControl(''),
      nomeUsuario: new FormControl('', [Validators.required]),
      nomeCompleto: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required]),
      dataNascimento: new FormControl('', [Validators.required]),
      cep: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      funcaoSelecionado: new FormControl('', [Validators.required]),
      sexo: new FormControl('', [Validators.required]),
      endereco: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required]),
      login: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
    });
  }

  get nomeUsuario() {
    return this.cadastroUsuario.get('nomeUsuario')!;
  }
  get nomeCompleto() {
    return this.cadastroUsuario.get('nomeCompleto')!;
  }
  get cpf() {
    return this.cadastroUsuario.get('cpf')!;
  }
  get dataNascimento() {
    return this.cadastroUsuario.get('dataNascimento')!;
  }
  get login() {
    return this.cadastroUsuario.get('login')!;
  }
  get senha() {
    return this.cadastroUsuario.get('senha')!;
  }
  get telefone() {
    return this.cadastroUsuario.get('telefone')!;
  }
  get sexo() {
    return this.cadastroUsuario.get('sexo')!;
  }
  get funcaoSelecionado() {
    return this.cadastroUsuario.get('funcaoSelecionado')!;
  }
  get email() {
    return this.cadastroUsuario.get('email')!;
  }
  get cep() {
    return this.cadastroUsuario.get('cep')!;
  }
  get endereco() {
    return this.cadastroUsuario.get('endereco')!;
  }

  atualizarImagensDeGenero() {
    const generoSelecionado = this.cadastroUsuario.get('sexo')!.value;

    if (generoSelecionado === 'Masculino') {
      this.Masculino = '/assets/usuarioHomem.png';
    } else if (generoSelecionado === 'Feminino') {
      this.Feminino = '/assets/usuarioMulher.png';
    }
  }


  submit() {
    if (this.cadastroUsuario.invalid) {
      return;
    }
    this.onSubmit();
  }

  onSubmit() {
    this.usuario.nomeCompleto = this.cadastroUsuario.get('nomeCompleto')?.value;
    this.usuario.telefoneCelular = this.cadastroUsuario.get('telefone')?.value;
    this.usuario.cpf = this.cadastroUsuario.get('cpf')?.value;
    this.usuario.dataNascimento = this.cadastroUsuario.get('dataNascimento')?.value;
    this.usuario.cep = this.cadastroUsuario.get('cep')?.value;
    this.usuario.email = this.cadastroUsuario.get('email')?.value;
    this.usuario.funcao = this.cadastroUsuario.get('funcaoSelecionado')?.value;
    this.usuario.sexo = this.cadastroUsuario.get('sexo')?.value;
    this.usuario.endereco = this.cadastroUsuario.get('endereco')?.value;
    this.usuario.numEndereco = this.cadastroUsuario.get('numero')?.value;
    this.usuario.idLoginFk.nomeUsuario = this.cadastroUsuario.get('nomeUsuario')?.value;
    this.usuario.idLoginFk.senha = this.cadastroUsuario.get('senha')?.value;
    this.usuario.dataAdmissao = this.formatarData(new Date())
    this.usuario.status = "Ativo"
    this.salvarUsuario(this.usuario);
  }

  salvarUsuario(usuario: Usuario) {
    this.usuarioService.incluirUsuario(usuario).subscribe(
      response => {
        this.exibirMensagemDeSucesso();
      },
      error => {
        this.exibirMensagemDeErro();
      }
    );
  }

  public formatarData(date: Date) {
    const dia = date.getDate();
    const mes = date.getMonth() + 1; // Os meses em JavaScript são base 0
    const ano = date.getFullYear();

    const dataFormatada = `${ano}-${mes}-${dia}`;
    return dataFormatada;
  }

  exibirMensagemDeSucesso() {
    Swal.fire('Sucesso!', 'Usuário Cadastrado com Sucesso.', 'success');
  }

  exibirMensagemDeErro() {
    Swal.fire('Erro!', 'Ocorreu Algum Erro no Cadastro Usuário.', 'error');
  }

}
