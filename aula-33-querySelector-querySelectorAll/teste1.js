const divTodas = [...document.getElementsByTagName("div")]
const cursosTodos = [...document.getElementsByClassName("curso")]
const cursosC1 = [...document.getElementsByClassName("c1")]
const cursosC2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = document.getElementById("c2")

//const query_divTodas = document.querySelector("div")
const query_divTodas = [...document.querySelectorAll("div, p")]   //retorna todas as divs em uma node list (que é tipo um html collection)
const query_div1Todas = [...document.querySelectorAll("div[class]")]
const query_cursosTodos = [...document.querySelectorAll(".curso")]
const query_cursosC1 = [...document.querySelectorAll(".c1, p")]
const query_cursosC2 = [...document.querySelectorAll(".c2")]
//quero pegar todos os elementos p que está dentro de uma div
const query_div2Todas = [...document.querySelectorAll("div > p")]


console.log(query_divTodas)   //ele vai procurar a primeira div da página e vai retornar
console.log(query_cursosTodos)  //me retorna só 12
console.log(query_cursosC1)
console.log(query_cursosC2)
console.log(query_div1Todas)
console.log(query_div2Todas)


// console.log(divTodas)
// console.log(cursoTodos)
// console.log(cursosC1)
// console.log(cursosC2)
// console.log(cursoEspecial)  

// cursosC1.map((el, i) => {
//     el.classList.add("destaque")
// })       
