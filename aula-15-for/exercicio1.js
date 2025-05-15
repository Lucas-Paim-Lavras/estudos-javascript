let numero = Number(prompt("Digite um número para que eu te mostre a tabuada do mesmo"))
for (let i = 1; i <= 10; i++){
    console.log(i + "x " + numero, " = " + numero*i )
}

for (let n = 1; n <= 20; n += 2){
    console.log(n, " x ", numero, " = ", numero*n )
}

for (let p = -6 ; p <= 10; p++){
    if (p % 2 == 0){
        console.log (p + " é um número par.")
    } else {
        console.log (p + " é um número ímpar.")
    }
}