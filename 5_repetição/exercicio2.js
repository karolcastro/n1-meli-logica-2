/* Crie um programa gerador de estrelas. O usuário informa um número, e o programa gera uma pirâmide de estrelas no seguinte formato:
// Ex.: Usuário informa 5 e o programa retorna
// *
// * *
// * * *
// * * * * 
// * * * * * 
- Você pode concatenar uma string usando: + ou +=*/

const r = require('readline-sync');

let num = parseInt(r.question('Digite um numero: '));// solicita o numero  - o parseint deixa o numero inteira
let estrela = '*' // declara a variavel * que é estrela

for(let i = 0; i <= num; i ++){// looping
    console.log (estrela); //printa na tela a quantidade de estrelas
    estrela = estrela + '*'; // a estrela recebe estrela 
}