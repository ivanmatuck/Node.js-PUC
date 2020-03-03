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
    handler: (argv) => {
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
    },
    handler: (argv) => {
        console.log(chalk.red('Removing a existing task'))
        task.removeTask(argv.name)
    }
})

yargs.command({
    command: 'list',
    describe: 'List all tasks',
    handler: () => {
        console.log(chalk.blue.bold.inverse('Listing out all tasks'))
        const allTasks = task.loadAllTasks()
        const allTasksJSON = JSON.stringify(allTasks, null, 2)
        console.log(allTasksJSON)
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a task from the ToDo list',
    builder: {
        name: {
            describe: 'task to find',
            demandOption: true,
            type:'string'
        }
    },
    handler: (argv) => {
        console.log(chalk.yellow.bold.inverse('Reading a task'))
        const taskFound = task.findTask(argv.name)
        console.log(JSON.stringify(taskFound, null, 2))
    }
})

yargs.command( {
    command: 'update',
    describe: 'Update a task',
    builder: {
        name: {
            describe: 'task to find',
            demandOption: true,
            type: 'string'
        },
        status: {
            describe: 'status to update the task',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log(chalk.white.bold.inverse('Updating a task'))
        task.updateTasks(argv.name, argv.status)
    }
})

yargs.parse()