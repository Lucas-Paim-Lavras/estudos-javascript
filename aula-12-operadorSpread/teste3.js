const jogador1={nome: "Bruno", energia: 100, vidas:3, magia: 280}
const jogador2={nome: "Bruce", energia: 100, vidas:5, velocidade: 150}
const jogador3={...jogador1, ...jogador2}

console.log(jogador3)  //quando temos alguns dados diferentes, ele concatena os dados que são diferentes, no caso imprimiu a magia e a velocidade também