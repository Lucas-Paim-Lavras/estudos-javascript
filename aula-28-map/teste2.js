//primeiro exemplo
const cursos1 = ['HTML', 'CSS', 'Javascript', 'PHP', 'React']
cursos1.map((elemento, indice) => {
    console.log("Curso: " + elemento + " - Posição do curso: " + indice)
})

//segundo exemplo, usando o return
const cursos2 = ['HTML', 'CSS', 'Javascript', 'PHP', 'React']
let c = cursos2.map((elemento, indice) => {
    return elemento
})
console.log(c)


