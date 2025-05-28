//funções anônimas são funções que não precisam de um nome

const funcao = function (v1, v2){
    return v1 + v2  ///não dei um noma para a função e já coloquei ela diretamente em uma variável (no caso a variável f)
}

console.log(funcao(10, 5))

//outra forma
const f = function (...valores){
    let resultado = 0
    for (valor of valores){
        resultado += valor
    }
    return resultado
}

console.log(f(10, 5, 8))

//Função Construtora Anônima
const f2 = new Function ("v1", "v2", "v3", "return v1+v2+v3")
console.log(f2(10,7))

//o ultimo parâmetro é o corpo da função
