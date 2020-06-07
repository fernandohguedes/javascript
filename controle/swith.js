
// conhecendo a estrutura de controle switch case
const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 1:
            console.log('Testando o case 1')
            break
        case 2:
            console.log('Testando o case 2')
            break
        case 3:
            console.log('Testando o case 3')
            break
        case 4:
            console.log('Testando o case 4')
            break
        default:
            console.log('Caiu no default')
    }
}