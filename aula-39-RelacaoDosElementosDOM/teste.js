const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".cursos")]
const c1_2 = document.querySelector("#c1_2")

console.log(c1_2.parentElement)   //pais do c1_2
console.log(c1_2.parentNode)      //pais do c1_2

console.log(c1_2.parentNode.parentNode)  //mostrou o avô
console.log(c1_2.parentNode.parentNode.children[4])  //um filho do Avô, como se fosse um tio do c1_2 

// console.log(caixa1.hasChildNodes())
// console.log(btn_c[0].hasChildNodes())
// console.log(btn_c[0].childNodes)

// console.log(caixa1.firstElementChild.innerHTML=("teste"))
// console.log(caixa1.children[1].innerHTML=("teste"))   //consigo alterar os elementos

// if(btn_c[0].children.length > 0){
//     console.log("Possui filhos")
// }else{
//     console.log("Não possui filhos")
// }

//outra forma é usando uma condição ternária
// console.log(btn_c[2].children.length > 0 ? "Possui Filhos" : "Não possui filhos")