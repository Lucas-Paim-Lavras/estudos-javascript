function inserirLinha(){
    const nome = document.getElementById("nome").value
    const telefone = document.getElementById("telefone").value
    const cpf = document.getElementById("cpf").value
    const email = document.getElementById("email").value
    const inputs = document.getElementsByClassName("input")   //me retorna um conjunto de elementos
    for (let i of inputs){
        if(i.value === ""){
        alert("Por favor, preencha os campos vazios!")
        return
        }
    }
    if (telefone.length !== 11){
        alert("Preencha o número de telefone com 11 dígitos")
        return
    } else if (cpf.length !== 11){
        alert("Preencha o número de cpf com 11 dígitos")
        return
    }
    const corpodeTabela = document.getElementById("corpo_tabela")
    const nova_linha = document.createAttribute


    
    // corpodeTabela.innerHTML +=    //uso o += para acrescentar, se eu usar só o = eu vou substitutir
    //                 `<tr>
    //                 <td>${nome}</td>
    //                 <td>${telefone}</td>
    //                 <td>${cpf}</td>
    //                 <td>${email}</td>
    //                 <td><button class="btn_remover">Remover</button></td>
    //                 </tr>`
    // return


}


