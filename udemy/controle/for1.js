// criando um while
let contador = 1
while (contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}

// criando um for que faz o mesmo que o while acima
for (let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}

//percorrendo uma lista com for
const notas = [5.55, 7.9, 3, 4, 9.3]

for (i = 0; i < notas.length; i++) {
    console.log(`notas = ${notas[i]}`)
}