const soma=(v1, v2, v3)=>{      //jeito estranho de escrever uma função mas escreve
    return v1+v2+v3
}

let valores = [1, 5, 4]
console.log(soma(...valores))   //se eu uso o spread ... eu consigo usar o array valores na função - passando os elementos de um array como elementos
