
export class Usuario {
    public idUsuario!: number;
    public usuario!: string;
    public nomeCompleto!: string;
    public email!: string;
    public telefoneCelular!: string;
    public cpf!: string;
    public endereco!: string;
    public numEndereco!: number;
    public cep!: string;
    public dataNascimento!: Date;
    public sexo!: string;
    public funcao!: string;
    public dataAdmissao!: Date;
    public idLoginFk!: Login;
    public status!: string;
}

class Login {
    nomeUsuario!: string;
}



