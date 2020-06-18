//mecânismo tratamento de erro
function imprimirNome(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) {
        tratarErro(e)
    }
}

function tratarErro(erro){
    //throw new Error('Vamos retornar algo')
    throw { 
        nome: "Badrequest",
        mensagem: "Ops Algo de erro não está certo",
        date: new Date
    }
}



const obj = { nome: 'Roberto' }
imprimirNome(obj);