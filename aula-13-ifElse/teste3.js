//Fazendo condições aninhadas, if dentro de if

let numero = 141

if(numero > 10){
    console.log("Numeral maior que 10")
    if(numero > 50){
        console.log("Numeral maior que 50")
    }

}else if(numero > 5){
    console.log("Numeral entre 6 e 10")
}else{
    console.log("Numeral menor ou igual a 5")
}

console.log("Fim do Programa")