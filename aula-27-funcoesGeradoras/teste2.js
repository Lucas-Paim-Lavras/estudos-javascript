function* perguntas(){
    const nome = yield 'Qual o seu nome?'
    const esporte = yield 'Qual seu esporte favorito?'
    return 'Seu nome é '+ nome + ', seu esporte favorito é ' + esporte
}

const itp = perguntas()
console.log(itp.next().value)
console.log(itp.next('Lucas Paim de Morais').value)
console.log(itp.next('Volei').value)
