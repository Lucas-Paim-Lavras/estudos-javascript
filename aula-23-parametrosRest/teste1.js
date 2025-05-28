function soma (...valores){
    let tamanho = valores.length
    let resultado = 0
    for (let i = 0; i < tamanho; i++)
        resultado += valores [i]    
    return resultado
}

console.log(soma(10, 5, 4, 6)) 

// de outra forma usando for of

function soma (...valores){
    let resultado = 0
    for (valor of valores){
        resultado += valor 
    } 
    return resultado
}

console.log(soma(10, 5, 4, 6))









