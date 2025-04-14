"use strict"
//Teste 1: Usando o Var que é uma variável que pode ser acessada em qualquer lugar
if(true){
    var nome="Lucas"   //é uma variável global
}
console.log(nome)

//Teste 2: Usando o Let que é uma variável que é restrita a um determinado escopo, isto é, se eu digitar o console.log (nome) com ela, não vou conseguir acessá-la porque está está dentro do if(true)
if(true){
    let nome="Lucas"   //para bugar no terminal tenho que comentar o var nome="Lucas"
}
console.log(nome)

//Teste 3:
