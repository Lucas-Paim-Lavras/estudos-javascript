let n1, n2, n3, n4
n1 = 10
n2 = 5
n3 = 15
n4 = 2

if((n1>n2) && (n3>n4)){
    console.log("verdadeiro")  /*esse if é certeiro porque é a única situação que pode ocorrer verdadeiro é quando os dois são verdadeiros*/
}else{
    console.log("falso")   //quando é colocado o else ele vai percorrer todas as outras opções da tabelinha
}

if(!(n1>n2) && (n3>n4)){
    console.log("verdadeiro")  /*esse if é certeiro porque é a única situação que pode ocorrer verdadeiro é quando os dois são verdadeiros*/
}else{
    console.log("falso")   //quando é colocado o else ele vai percorrer todas as outras opções da tabelinha
}