const log = require('./util')
const _ = require('lodash')

console.log('app.js')
log('primeira mensagem de log')
log('segunda mensagem de log')

const meuArray = [1, 2, 3, 4, 1, 9]

// const meuNovoArray = [
//     [1, 2, 3],
//     [4, 5, 6]
// ]
const meuNovoArray = _.chunk(meuArray, 3)

console.log(meuArray)
console.log(meuNovoArray)

const diferenca = _.difference(meuNovoArray[0], meuNovoArray[1])

console.log(diferenca)

console.log(_.indexOf(meuArray, 10))


