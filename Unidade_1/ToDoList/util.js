//criar uma função que recebe um parâmetro 
//log.txt
//se o arquivo n existe, deve-se criar o log.txt
//se o arquivo existe, deve-se  adicionar o conteúdo enviado por par em uma nova linha
//adicionar no log a data e hora que foi gravado

//data -> conteúdo

const fs = require('fs');
const logFileName = 'log.txt'


const log = (content) => {
    // fs.appendFileSync(logFileName, `${new Date()} -> ${content}\n`)
    const currentDate = new Date()
    fs.appendFileSync(logFileName, `${currentDate} -> ${content}\n`)
}

module.exports = log