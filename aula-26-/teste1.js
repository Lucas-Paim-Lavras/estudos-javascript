//uma função dentro de outra função - Funções aninhadas
const soma = (...valores) => {
    const somar = valor =>{
        let res = 0
        for (
            v of valor){
            res += v
        }
        return res
    }
    return somar(valores)
}

console.log (soma(10, 5, 65))





//outra forma
const somar = valor =>{
        let res = 0
        for (
            v of valor){
            res += v
        }
        return res
    }
const soma = (...valores) => {
    return somar(valores)
}
console.log (soma(10, 5, 65))
valor1 =  [10, 5, 15]
console.log (soma(...valor1))
