const converterInt = (elemento) => parseInt(elemento)  //o parseInt transforma um elemento em inteiro
const dobrar = (elemento) => elemento*2
let numeroConvert = ['1', '2', '3', '4', '500'].map(converterInt)
let numeroDobrado = ['1', '2', '3', '4', '500'].map(dobrar)
console.log(numeroConvert)   //já converte as Strings diretamente para inteiros
console.log(numeroDobrado) 








// const el = document.getElementsByTagName
// ("div")
// const valor = Array.prototype.map.call(el, ({innerHTML}) => innerHTML)
// console.log(valor)


// let el = document.getElementsByTagName ("div")
// el = [...el]
// console.log (el)
// el.map((e, i)=>{
//     e.innerHTML = "CFB Cursos"
//     console.log(e.innerHTML)
// })