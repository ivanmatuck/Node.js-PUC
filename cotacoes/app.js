const yargs = require('yargs')
const chalk = require('chalk')
const cotacao = require('./util/cotacao')

// alterando versão do CLI
yargs.version('1.0.0')


yargs.command({
    command: 'consulta',
    describe: 'Consulta um ativo na bolsa de valores',
    builder: {
        ativo: {
            describe: 'Ativo na bolsa de valores',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        cotacao(argv.ativo.toUpperCase(), (data) => {
            console.log(chalk.white.bold(`${data.symbol}`))
            console.log(chalk.white.bold(`Nome: ${data.name}`))
            console.log(chalk.blue(`Valor de fechamento: ${data.price}`))
            console.log(chalk.green(`Maior ALTA do dia: ${data.day_high}`))
            console.log(chalk.red(`Maior BAIXA do dia: ${data.day_low}`))
        })
    }
})


yargs.parse()