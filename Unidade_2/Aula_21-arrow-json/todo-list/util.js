const fs = require('fs')
const logFileName = 'log.txt'

const log = (content) => {
    const currentDate = new Date()
    fs.appendFileSync(logFileName, `${currentDate} -> ${content}\n`)
}

module.exports = log