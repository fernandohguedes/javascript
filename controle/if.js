function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Aprovado' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6)

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É verdade ' + valor)
    }
}

// testando valores que por padrão são falsos e outros que são verdadeiros
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})