//o método this é uma palavra-chave que faz referência ao "dono" do contexto onde você está — ou seja, quem está executando o código naquele momento.

function aluno (nome, nota){
    this.nome = nome
    this.nota = nota

    this.dados_anonimo = function(){
        setTimeout(function(){     //Dentro dela, o this não se refere ao objeto aluno1, e sim ao objeto global
            console.log(this.nome)
            console.log(this.nota)
        }, 3000)}
    this.dados_arrow = function(){
        setTimeout(() => {    //setTimeout(() => { ... }) usa arrow function, que herda o this externo.
            this.nome = "x"
            this.nota = 5
            console.log(this.nome)
            console.log(this.nota)
        }, 3000)       
    }
}
const aluno1 = new aluno("Lucas Paim de Morais", 67)
aluno1.dados_anonimo()
aluno1.dados_arrow()