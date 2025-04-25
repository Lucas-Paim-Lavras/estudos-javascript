let n1=1
let n2="1"

let v1={nome:"Lucas"}
//let v2={nome:"Lucas"}
let v2=v1   // aqui a referência da memória pe a mesma, logo, me retorna True

console.log(n1===n2) // o 3 igual refere uma igualdade com relação ao tipo, valor e a posição dos objetos. É um igual mais preciso!
console.log(v1===v2)

let nome=prompt("Digite o seu nome")
console.log(nome)