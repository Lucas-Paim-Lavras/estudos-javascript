let v1 = 10
let v2 = "10"
let v3 = v1 === v2
let v4 = {nome: "Bruno"}

console.log(v1)
console.log(v2)
console.log(v3)
console.log(v4)

console.log('-'.repeat(30))
// o Typeof me diz o tipode variável que temos

console.log(typeof(v1))
console.log(typeof(v2))
console.log(typeof(v3))
console.log(typeof(v4))

console.log('-'.repeat(30)) //linha para separar

// forma mais organizada de fazer esse print usando a concatenação
console.log("Valor: " + v1 + " - Tipo: " + typeof(v1))
console.log("Valor: " + v2 + " - Tipo: " + typeof(v2))
console.log("Valor: " + v3 + " - Tipo: " + typeof(v3))
console.log("Valor: " + v4 + " - Tipo: " + typeof(v4))

console.log('-'.repeat(30))