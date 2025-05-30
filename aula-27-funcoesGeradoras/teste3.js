function* contador (){
    let numero = 0
    while (true){
        yield numero++
        if (numero>516815184651564156)
            break
    }
}
const itc = contador()
for (let c of itc){
    console.log(c)
}

