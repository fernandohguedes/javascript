
// criar função de forma literal
function funcao1() {

}

// armazenar em uma variavel
const funcao2 = function () {

}

// armazenar em um array
const array = [function (a, b) { return a + b }, funcao1, funcao2]
console.log(array[0](2, 3))

// armazenar em um atributo de um objeto
const objeto = {}
objeto.falar = function () {
    return 'Bom dia'
}
console.log(objeto.falar())

// passar função como parâmetro para outro função
function run(fun) {
    fun()
}

run(function () { console.log('Executando...') })

// uma função pode retornar ou conter outra função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
