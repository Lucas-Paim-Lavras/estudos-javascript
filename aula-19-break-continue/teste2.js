// usando o continue
let n=0;
let max = 1000
let pares = 0

for (let i = n; i<max; i++){
    if (i % 2 != 0){
        continue  //eu não saio do for, eu continuo nele, porém o programa não vai contar os números ímpares, sem o continue, ele contava.
    }
    pares++

}
console.log("Quantidade de números pares: " + pares)
console.log("Fim do programa")