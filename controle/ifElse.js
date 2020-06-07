
function imprimirResultado(nota) {
    if (nota >= 7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(5)
imprimirResultado(8)

// por ser uma linguagem fracamente tipado o javascript permite realizar a comparação 
// mas vai ser sempre um valor falso em uma comparação entre números, comprar os tipos de 
// dados pode ser uma forma se garantir a qualidade do código nessas situação.
imprimirResultado('Epa')