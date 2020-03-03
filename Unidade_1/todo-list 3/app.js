const log = require('./util')
const _ = require('lodash')
const chalk = require('chalk')

console.log('app.js')
log('primeira mensagem de log')
log('segunda mensagem de log')

const meuArray = [1, 2, 3, 4, 1, 9]

// const meuNovoArray = [
//     [1, 2, 3],
//     [4, 5, 6]
// ]
const meuNovoArray = _.chunk(meuArray, 3)

const primeiraMensagem = chalk.bold.green.inverse('Array inicial')
const segundaMensagem = chalk.bold.red.inverse('meu novo Array')

console.log(primeiraMensagem)

console.log(chalk.blue(meuArray))

console.log(segundaMensagem)
console.log(meuNovoArray)

const diferenca = _.difference(meuNovoArray[0], meuNovoArray[1])

console.log(diferenca)

console.log(_.indexOf(meuArray, 10))


