//o método map é usado em arrays para transformar cada elemento do array original em um novo valor, criando um novo array do mesmo tamanho

//Exemplos de uso

//exemplo 1
const numeros = [1, 2, 3, 4];
const dobrados = numeros.map(n => n * 2);
console.log(dobrados); // [2, 4, 6, 8]

//exemplo 2
const pessoas = [
  { nome: "Ana", idade: 20 },
  { nome: "Lucas", idade: 25 }
];
const nomes = pessoas.map(p => p.nome);
console.log(nomes); // ["Ana", "Lucas"]