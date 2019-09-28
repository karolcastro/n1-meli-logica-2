/*Crie um programa que pergunta ao usuário seu nome. Depois que o usuário digitar o nome, o programa deverá responder "Olá [nome]".
Enquanto usuário digitar qualquer palavra, print o que ele está digitando mas avise que para sair ele pode dizer "Tchau".
O programa vai dizer "Tchau [nome]" e finalizar o programa.
- Aqui você pode usar while ou do/while para resolver */

const r = require('readline-sync');

let nome = (r.question('Digite se nome: '));
console.log ('Olá ' + nome);
 let text = '';

do{
    text = r.question("Digite algo ou 'tchau' para sair ");
    console.log('Voce digitou : ' + text);

} while(text != 'tchau'); // quando o usuario digitar tchau ele sai

console.log('tchau ' + nome);


/* let nome = (r.question('Digite se nome: '));
console.log ('Olá ' + nome);
let texto ='';

for ( texto)
