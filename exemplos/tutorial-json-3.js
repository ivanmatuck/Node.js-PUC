const fs = require('fs')

//criar carro com atributos
const carro = {
    modelo: 'Azera',
    ano: 2012,
    cor: 'preto'
}
//converte em JSON
let carroJSON = JSON.stringify(carro)

//grava em arquivo json
fs.writeFileSync('carro.json', carroJSON)

//recupera o objeto do arquivo json
const carroContent = fs.readFileSync('carro.json')

//imprime na tela convertido para para string
console.log(carroContent.toString())

const carroDeVoltaComoObjeto = JSON.parse (carroContent.toString())
carroDeVoltaComoObjeto.ano = 2018
console.log(carroDeVoltaComoObjeto)

//converte em json
carroJSON = JSON.stringify(carroDeVoltaComoObjeto)
console.log(carroJSON)
//grava no arquivo novamente
fs.writeFileSync('carro.json', carroJSON)