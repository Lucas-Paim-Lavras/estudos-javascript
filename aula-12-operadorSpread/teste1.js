let n1=[10, 20, 30]
let n2=[11,22,33,44,55]
let n3 = [...n1]  //o spread faz com que o n3 receba o array n1
let n4 = [...n1, ...n2] // concatena os dois arrays n1 e n2

console.log("n1 : 1" + n1)
console.log("n2 : " + n2)
console.log("n3 : " + n3)
console.log("n4 : " + n4)
