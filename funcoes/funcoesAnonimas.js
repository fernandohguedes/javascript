// toda função que não tem é chamada de função anonima.
// toda função arrow é uma função anonima em javascript

const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}


imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)

// passando uma função anonima como parâmetro
imprimirResultado(3, 4, function (x, y) {
    return x - y
})

// passando uma arrow function como parâmetro
imprimirResultado(3, 4, (x, y) => x * y)
