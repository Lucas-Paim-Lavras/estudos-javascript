const divc1 = document.getElementById("c1")
const divc2 = document.getElementById("c2")
const divc3 = document.getElementById("c3")
const divc4 = document.getElementById("c4")
const divc5 = document.getElementById("c5")
const divc6 = document.getElementById("c6")

//se quisermos criar um array desses elementos
const arrayElementos = [divc1, divc2, divc3, divc4, divc5, divc6]
//quero alterar todos os elementos dentro do array, usamos o for para isso ou o map

// for (d of arrayElementos){
//     d.innerHTML = "CFB Cursos"
// }     

arrayElementos.map((e) => {    //melhor usar o map
    e.innerHTML = "CFB Cursos"
    console.log(e)
})

// console.log(divc1)
// console.log(divc1.id)
// console.log(divc1.innerHTML)
// divc1.innerHTML = "CFB Cursos" //mudo automaticamente no DOM