//teste 3
"use strict"

function teste(){
    if (true){
        let nome = "Bruno" // basicamente o let é uma variável que só funciona dentro de um escopo. O var já e global. Declarações diferentes. Sempre dar preferência ao let
        console.log("dentro do IF do teste: " + nome)
    }
    console.log("Dentro do teste: " + nome)
}

teste()
console.log("Fora do teste: " + nome)