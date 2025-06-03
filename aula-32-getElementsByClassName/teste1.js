const cursoTodos = [...document.getElementsByClassName("curso")]
const cursosC1 = [...document.getElementsByClassName("c1")]
const cursosC2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = document.getElementsByClassName("c2")[0] //retorna o elemento da posição indicada

console.log(cursoTodos)
console.log(cursosC1)
console.log(cursosC2)
console.log(cursoEspecial)  //vai retornar HTML

cursosC1.map((el, i) => {
    el.classList.add("destaque")
})       //alterei todas as classes de uma vez para o mesmo estilo

//com o map eu consigo alterar e tomar com a class destaque todos os elementos da classe que eu quiser