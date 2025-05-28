const soma = (v1, v2) => {return v1 + v2}
console.log(soma(10, 5))

const nome = n => n
console.log(nome("Lucas"))

const add = n => n + 10  //se for algo simples,não precisa usar as chaves
console.log(add(10))

const soma1 = (v1, v2) => {  //quando é mais complexo, precisa usar as chaves
    let res = v1 + v2
    return res
}
console.log(soma(10, 5))
