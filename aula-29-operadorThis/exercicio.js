function arCondicionado (modelo, temperaturaAtual){
    this.modelo = modelo
    this.temperaturaAtual = temperaturaAtual
    
    this.mostrarStatus = function (){
        setTimeout(() => {
            console.log(this.modelo)
            console.log(this.temperaturaAtual)
        })
    }
}

