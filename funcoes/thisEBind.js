// utilizando o this
const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

// utilizando o bind
const falarDePessoa = pessoa1.falar1.bind(pessoa1)
falarDePessoa()