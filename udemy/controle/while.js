
function gerarValorAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}


/*
 * Uma estrutura Whilhe executa algum tipo de comportamento para situaçõa
 * onde não sabemos quantos vezes o laço de repetição será executado
 * a premissa inicial é verificar se a expressão booleana é verdadeira para entrar
 * no laço se a estrutura for falsa não será executado.
 */
let opcao = 0

while (opcao != -1) {
    opcao = gerarValorAleatorio(-1, 10)
    console.log('Opção escolhida foi ' + opcao)
}

console.log("Até a próxima")