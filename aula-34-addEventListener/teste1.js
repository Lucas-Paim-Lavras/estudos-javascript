// const c1 = document.getElementById("c1")
// const c1 = document.querySelector("#c1")
const cursos=[...document.querySelectorAll(".curso")]
const cursosClicados = new Set()  //armazena IDs únicos clicados
cursos.map((elemento)=> {
    elemento.addEventListener("click", (evt) => {
        const elemento = evt.target
        elemento.classList.add("destaque")
        console.log(elemento.innerHTML + " foi clicado!")

        cursosClicados.add(elemento.id)    //armazena o id clicado

        if(cursosClicados.size == cursos.length){
            console.log("Todos os cursos foram clicados!")
        }
    })
})

// const msg = () => {
//     alert("clicou")
// }

// c1.addEventListener("click", (evt) => {
//     const elemento = evt.target
//     elemento.classList.add("destaque")
// })   //eu consegui deixar o HTML em vermelho e ele ficar assim 
