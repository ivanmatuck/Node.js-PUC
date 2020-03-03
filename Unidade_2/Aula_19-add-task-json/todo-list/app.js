const chalk = require('chalk')
const yargs = require('yargs')
const task = require('./task')

// alterando a versão do CLI
yargs.version('1.0.1')

yargs.command({
    command: 'add',
    describe: 'Add a new task into the ToDo list',
    builder: {
        name: {
            describe: 'Task name',
            demandOption: true,
            type: 'string'
        },
        description: {
            describe: 'Task description',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv){
        const info = chalk.green.bold.inverse('Creating a new task: ' );
        console.log(info)
        task.addTask(argv.name, argv.description)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a task from the ToDo list',
    builder: {
        name: {
            describe: 'Remove a task from ToDo list',
            DemandOption: true,
            type: 'string'
        }
    }
    handler: function (argv) {
        console.log(chalk.red('Removing a existing task'))
        task.removeTask(argv.name)
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

yargs.parse()