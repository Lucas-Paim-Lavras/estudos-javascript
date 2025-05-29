//Crie uma função chamada processarNumeros que receba três ou mais números como parâmetros (use ...).
// Dentro dela, crie uma função interna chamada analisar que:
//     Verifica qual é o maior número
//     Verifica qual é o menor número
//     Calcula a média entre todos

const processarNumeros = (...valores) => {
    const analisar = valor => {
        const maior = Math.max(...valores);
        const menor = Math.min (...valores);
        let soma = 0;
        for (let n of valores){
            soma += n;
        }
        const media = soma / valores.length;
        return {
            maior,
            menor,
            media
        }
    }
    
    return analisar(valores);
}

const resultado = processarNumeros(10, 5, 8, 20, 1)
console.log ("Resultado da Análise: ");
console.log ("- Maior Número: ", resultado.maior)
console.log ("- Menor Número: ", resultado.menor)
console.log ("- Média dos Números: ", resultado.media)
