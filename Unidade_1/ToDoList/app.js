const log = require('./util');
const _ = require('lodash')

/*
const nome = 'Ivan';

const resultado = calculoMaluco(10, 2)

//console.log('estou em --> app.js');

// console.log(`${nome} ${sobrenome}`);

console.log(resultado)
 */

 //aula 9


 console.log('app.js')
 log('primeira mensagem de log')
 log('segunda mensagem de log')

//  aula 10

// const meuArray = [1, 2, 3, 4, 5, 6]


const meuArray = [1, 2, 3, 4, 1, 9]

/* const meuNovoArray = [
    [1, 2, 3],
    [4, 5, 6]
] */

const meuNovoArray = _.chunk(meuArray, 3)

console.log('Array inicial')
console.log(meuArray)
console.log(meuNovoArray)

const diferenca = _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)

console.log(diferenca)

console.log;

