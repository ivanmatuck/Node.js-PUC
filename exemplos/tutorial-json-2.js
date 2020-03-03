const fs = require('fs')

/* // objeto criado
const pessoa = {
    nome : 'Ivan',
    sobrenome : 'Matuck',
    idade : 41
}

//converter o objeto JS em JSON
const pessoaJSON = JSON.stringify(pessoa)

// gravar em um arquivo o conteúdo
fs.writeFileSync('pessoa.json', pessoaJSON)

// recuperar o conteúdo do arquivo JSON
const pessoaContent = fs.readFileSync('pessoa.json')

console.log(pessoaContent.toString())

const pessoaDeVoltaComoObjeto = JSON.parse(pessoaContent.toString())
pessoaDeVoltaComoObjeto.sobrenome = 'Camargo'
console.log(pessoaDeVoltaComoObjeto)
console.log(pessoaDeVoltaComoObjeto.nome) */


//criar carro com atributos
const carro = {
    modelo: 'Azera',
    ano: 2012,
    cor: 'preto'
}
//converte em JSON
const carroJSON = JSON.stringify(carro)

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

//grava no arquivo novamente
fs.writeFileSync('carro.json', carroJSON)