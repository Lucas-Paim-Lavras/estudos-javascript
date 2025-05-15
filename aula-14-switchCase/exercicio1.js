// peça ao usuário (via prompt) um número. verifique se ele é positivo, negativo ou zero, exiba no console a mensagem adequada.

let numero = Number(prompt("Digite um número: "));

if (numero > 0){
    console.log("Número positivo.")
}else if (numero < 0){
    console.log("Número negativo")
} else {
    console.log("Número igual a zero.")
}



