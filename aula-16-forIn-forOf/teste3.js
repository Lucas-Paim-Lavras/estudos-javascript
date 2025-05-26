const objs = document.getElementsByTagName("div")

let num = [10, 20, 30, 40, 50]

for (objeto of objs){ 
    console.log(objeto.innerHTML = "Curso")
}

for (objeto in objs){
    console.log(objeto)
}

//se eu quiser os elementos, uso o of, se eu quiser as posições, uso o for in