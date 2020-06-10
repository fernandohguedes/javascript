
// forma anterior ao ES15 de declarar uma função mas que ainda sim é utilizada
let dobro = function (a) {
    return 2 * a
}
console.log(dobro(2))

// refatorando a função anterior para uma arrow function
dobro = (a) => {
    return 2 * a
}
console.log(dobro(4))

// função arrow que tem retorno implicito
dobro = a => 2 * a 
console.log(dobro(7))


let ola = function () {
    return 'Olá'
}
console.log(ola())

ola = () => {
    return 'Boa Tarde!'
}
console.log(ola())

ola = () => 'Olá Dona Maria' 
console.log(ola())

ola = _ => 'Olá estou estranho sem parâmetros'
console.log(ola())