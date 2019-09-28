/*Crie um programa que receba o array = [5, 37, 18, 59, 12, -5] e faça as seguintes operações:
    - Printe o maior;
    - Printe o menor.*/

    const r = require('readline-sync');

    let lista = [ 5, 37, 18, 59, 12, -5];
    let maior = -Infinity;//ou pode ser usado 0 zero
    let menor = + Infinity;

for (let i=0; i< lista.length ; i++){ // percorrendo a lista
    let numeroAtual = lista [i];
    if (numeroAtual > maior){ // nao pode colocar o ; pq o sistema entende que é o fim
    maior = numeroAtual;  
    }
    if (numeroAtual< menor){
    menor = numeroAtual;
    }


console.log('O maior numero é ' + maior ,'e o menor numero é' + menor);
