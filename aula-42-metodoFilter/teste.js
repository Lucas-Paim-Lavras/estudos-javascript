//O método filter nos ajuda a retornar apenas os elementos que queremos separar
    
const idades = [15, 21, 30, 17, 18, 44, 12, 50]

const maior = idades.filter((valor, ind, arr) => {
    if(valor >= 18)
        return valor
})

const menor = idades.filter((valor, ind, arr) => {
    if(valor < 18)
        return valor
})
    
console.log(maior)
console.log(menor)
console.log(idades)