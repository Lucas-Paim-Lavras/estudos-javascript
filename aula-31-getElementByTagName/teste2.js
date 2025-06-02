//Como consigo usar o map e entre outros métodos e funções no html colection? 
//O método mais simples é usando spread
const divc1 = document.getElementById("c1")
const divc2 = document.getElementById("c2")
const divc3 = document.getElementById("c3")
const divc4 = document.getElementById("c4")
const divc5 = document.getElementById("c5")
const divc6 = document.getElementById("c6")

const arrayElementos = [divc1, divc2, divc3, divc4, divc5, divc6]
const colecaoHTML = [...document.getElementsByTagName("div")]  //uso spread

colecaoHTML.map((e) => {
    console.log(e)
})

console.log(colecaoHTML)      //me retorna um HTML Collection
console.log(arrayElementos)   //me retorna o array
