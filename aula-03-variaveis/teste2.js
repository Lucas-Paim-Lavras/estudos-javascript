//Teste 2: Usando o Let que é uma variável que é restrita a um determinado escopo, isto é, se eu digitar o console.log (nome) com ela, não vou conseguir acessá-la porque está está dentro do if(true)

if(true){
    let nome="Lucas"  
}
console.log(nome)