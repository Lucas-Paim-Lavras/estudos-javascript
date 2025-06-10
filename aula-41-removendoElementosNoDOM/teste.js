const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".cursos")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]

cursos.map((el, index) => {
    const novoElemento = document.createElement("div")  
    novoElemento.setAttribute("id", "c" + index + 1) 
    novoElemento.setAttribute("class", "cursos c1")  
    novoElemento.innerHTML = el
    const btn_lixeira = document.createElement("img")
    btn_lixeira.setAttribute("src","./54324.png")
    btn_lixeira.setAttribute("class","btn_lixeira")
    novoElemento.addEventListener("click",  (evento) =>{
        // console.log(evento.target.parentNode)    //me retorna o click no console.log
        caixa1.removeChild(evento.target.parentNode)    //removo o target que eu clicar
    })
    
    //não consigo remover com o appendChild porque o btn lixeira não é filho do caixa1 e sim dos cursos (c1, c2, c3, c4, c5, ...)
    
    novoElemento.appendChild(btn_lixeira)
    caixa1.appendChild(novoElemento)
})






