const objs1=document.getElementsByTagName("div")  //dentro de objs tem uma coleção de divs do html - iso aqui retorna apenas na web retorna um html COLLECTION
const objs2=[...document.getElementsByTagName("div")]

objs2.forEach(element => {
    element.innerHTML="Curso"  /// aqui eu troco o que tinha escrito na div para a palavra curso pela função innverHTML
});  //retorna erro pois objs1 é um html collection e não um array

console.log(objs1)  //printa no console do site um HTML collection
console.log(objs2) //retorna um array, 


//no primeiro print retorna apenas elementos do html enquanto que no segundo retorna elementos quaisquer que podem ser strings, valores, enfim, qualquer coisa dentro do array.
