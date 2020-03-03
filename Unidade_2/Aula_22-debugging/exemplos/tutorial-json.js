const pessoa = {
    nome : 'Biharck',
    sobrenome : 'Araújo',
    idade : 32
}

console.log('Objeto JS')
console.log(pessoa)
console.log(pessoa.nome)

const pessoaJSON = JSON.stringify(pessoa)

console.log('JSON')
console.log(pessoaJSON)
console.log(pessoaJSON.nome)

const pessoaJSONToPessoa = JSON.parse(pessoaJSON)

console.log('Objeto JS de volta')
console.log(pessoaJSONToPessoa)
console.log(pessoaJSONToPessoa.nome)