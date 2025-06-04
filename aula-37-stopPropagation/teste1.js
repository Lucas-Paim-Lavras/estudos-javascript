const caixa1 = document.querySelector("#caixa1")
const btn_c1 = document.querySelector("#c1")
const cursos = [...document.querySelectorAll(".cursos")]

caixa1.addEventListener("click", (evento) => {
    console.log("clicou")
})

cursos.map((el)=>{
    el.addEventListener("click", (evento) => {
        evento.stopPropagation()        //não me retorna o evento, pois coloquei stoppropagation
    })
})

// btn_c1.addEventListener("click", (evento) => {
//     evento.stopPropagation()    //não me retorna evento, por conta do stopPropagation
// })