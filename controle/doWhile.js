function gerarValorAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}


/**
 * é uma estrutura de repetição que não é tão comum seu uso, ele trabalha executando
 * ao menos uma vez o laço, e no final verifica se a expressão booleana ainda se mantém
 * verdadeira.
 */
let opcao = -1

do {
    opcao = gerarValorAleatorio(-1, 10)
    console.log('Opção escolhida foi ' + opcao)
} while (opcao != -1)

console.log("Até a próxima")