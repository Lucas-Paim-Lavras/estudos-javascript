//basicamente é o if quando eu sei exatamente os casos que preciso testar como no caso da colocação que faremos abaixo

let colocacao = 1

switch(colocacao){
    case 1:
        console.log("Primeiro lugar")
        break
    case 2:
        console.log("Segundo lugar")
        break
    case 3:
        console.log("Terceiro lugar")
        break
    case 4: case 5: case 6:      //posso colcoar mais de um case
        console.log("Prêmio de participação")
        break
    default:
        console.log("Não subiu ao pódio")
        break
}