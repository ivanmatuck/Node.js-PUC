const chalk = require('chalk')
const yargs = require('yargs')

// alterando a versão do CLI
yargs.version('1.0.1')


yargs.command({
    command: 'add',
    describe: 'Add a new task into the ToDo list',
    builder: {
        name: {
            describe: 'Task name',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function (argv){
        console.log(chalk.green.bold.inverse(`Creating a new task: ${argv.name}`))
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a task from the ToDo list',
    handler: function () {
        console.log(chalk.red('Removing a existing task'))
    }
})

yargs.command({
    command: 'list',
    describe: 'List all tasks',
    handler: function () {
        console.log(chalk.blue('Listing out all tasks'))
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a task from the ToDo list',
    handler: function () {
        console.log(chalk.yellow('Reading a task'))
    }
})

// console.log(yargs.argv)

yargs.parse()

/* name: limpar a casa
description: limpar o sofá e a cozinha...
status: BACKLOG | IN_PROGRESS | DONE */

// adicionar no builder description
// descrição do novo campo
// adicionar o tipo
// imprimir no console.log
