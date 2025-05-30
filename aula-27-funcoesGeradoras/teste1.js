//a função tem o controle do que é retornado através de yelds
function* cores(){
    yield "Vermelho"
    yield "Verde"
    yield "Azul"
}

let itc = cores()
console.log (itc.next().value)    //ele retorna o primeiro yield
console.log (itc.next().value)    //retorna o segundo yield
console.log (itc.next().value)    //retorna o terceiro yield
console.log (itc.next().value)    //acabou os yields e retorna undefined



