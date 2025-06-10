const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".cursos")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]

// cursos.map((el) => {
//     const novoElemento = document.createElement("div")  //precisa apenas saber qual o tipo de elemento precisa ser criado e está na memória, mas ainda não foi adicionado pois eu ainda nã adicionei
//     novoElemento.setAttribute("id", "c7")
//     novoElemento.setAttribute("class", "cursos c1")  //pego o css da classe
//     novoElemento.innerHTML = el
//     caixa1.appendChild(novoElemento)
// })

//o problema é que assim, todos os cursos ficam com o mesmo id

cursos.map((el, index) => {
    const novoElemento = document.createElement("div")  //precisa apenas saber qual o tipo de elemento precisa ser criado e está na memória, mas ainda não foi adicionado pois eu ainda nã adicionei
    novoElemento.setAttribute("id", "c" + index + 1)  //fica bom isso em
    novoElemento.setAttribute("class", "cursos c1")  //pego o css da classe
    novoElemento.innerHTML = el
    caixa1.appendChild(novoElemento)
})
//desse jeito fica melhor





