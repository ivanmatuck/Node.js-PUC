const fs = require('fs')
// criar um objeto chamado carro com alguns atributos
// converter ele em JSON
// gravar em um arquivo chamado carro.json
// recurperar esse objeto (JSON -> object)
// alterar algum atributo
// salvar no arquivo novamente
// validar o arquivo carro.json

const carro = {
    numeroDePortas: 5,
    marca: 'space car',
    modelo: '7.0 turbo XLTRWK',
    ano: 2019,
    cor: 'verde'
}

let carroJSON = JSON.stringify(carro)
console.log(carro)
console.log(carroJSON)
fs.writeFileSync('carro.json', carroJSON)

// ler do arquivo carro.json
const carroFromJSONFile = fs.readFileSync('carro.json')
const carroObject = JSON.parse(carroFromJSONFile.toString())
console.log(carroObject)

carroObject.ano = 2050
console.log(carroObject)
carroJSON = JSON.stringify(carroObject)
fs.writeFileSync('carro.json', carroJSON)

