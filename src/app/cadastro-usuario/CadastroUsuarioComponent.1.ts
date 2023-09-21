import { Component, OnInit } from '@angular/core';
import { Usuario } from './model/usuario.module';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';


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
  public usuario: Usuario = {
    id: 0,
    imagem: "string",
    nomeUsuario: "string",
    nomeCompleto: "string",
    telefone: "string",
    cpf: "string",
    dataNascimento: new Date(),
    email: "string",
    sexo: "Masculino",
    cep: "string",
    endereco: "string",
    numero: 0,
    login: "string",
    senha: "string",
  };

  constructor(private formBuilder: FormBuilder) {}
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
      sexo: new FormControl ('', [Validators.required]),
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

    console.log(this.cadastroUsuario.value);
  }

}
