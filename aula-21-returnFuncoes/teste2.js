function canal(){
    let numero1 = 10
    let numero2 = 2
    let resultado = numero1*numero2

    if(resultado % 2 == 0)
        return "Par"
    else
        return "Impar"
}
let numero = canal()
console.log(numero)