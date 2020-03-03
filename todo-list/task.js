const fs = require('fs')
const chalk = require('chalk')

const addTask = (name, description) => {

    debugger

    const tasks = loadAllTasks()
    
    const duplicatedTask = tasks.find((task) => task.name === name)

    if(!duplicatedTask){
        const newTask = {
            name, 
            description,
            status : 'BACKLOG'
        }        
        tasks.push(newTask)    
        saveTasks(tasks)
        console.log(chalk.green.bold('Task created!'))
    }else{
        console.log(chalk.red.bold(`Task with name [${name}] already taken!`))
    }   

}

const saveTasks = (task) => {
    const tasksJSON = JSON.stringify(task)
    fs.writeFileSync('tasks.json', tasksJSON)
}

const loadAllTasks = () => {
    try {
        const tasksBuffer = fs.readFileSync('tasks.json')
        return JSON.parse(tasksBuffer.toString())        
    } catch (error) {
        return []
    }
}

const removeTask = (name) => {
    const tasks = loadAllTasks()
    const tasksToKeep = tasks.filter((tasks) => tasks.name !== name)

    saveTasks(tasksToKeep)

    console.log(chalk.yellow.bold(`Tasks with name [${name}] has been removed!`))

}

const findTask = (name) => {
    const task = loadAllTasks()
    const taskFound = task.find((task) => task.name === name)
    if(taskFound !== undefined) {
        return taskFound
    } else {
        return{}
    }
}

const updateTasks = (name, status) => {
    const tasks = loadAllTasks()

    tasks.find((task) => {
        if (task.name === name) {
            task.status = status
        }
    })

    saveTasks(tasks)

    console.log(chalk.green.bold(`Task status with name [${name}] has been updated!`))
}

module.exports = {
    addTask,
    removeTask,
    loadAllTasks,
    findTask,
    updateTasks,
}