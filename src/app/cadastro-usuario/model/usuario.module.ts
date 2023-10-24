
export class Usuario {
    idUsuario: string = "";
    nomeCompleto: string = "";
    email: string = "";
    telefoneCelular: string = "";
    cpf: string = "";
    endereco: string = "";
    numEndereco: number = 0;
    dataNascimento: string = "";
    funcao: string = "";
    idLoginFk: LoginVO = new LoginVO();
    sexo: string = "";
    cep: string = "";
    dataAdmissao: string = "";
    status: string = "";
}

export class LoginVO {
    idLogin: string = "";
    nomeUsuario: string = "";
    senha: string = "";
}





