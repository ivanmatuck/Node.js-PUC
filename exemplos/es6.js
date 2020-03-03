const name = 'Ivan'
const age = 41
const country = 'Brasil'

const pessoa = {
    name,
    idade: age,
    pais: country
    
}

console.log(pessoa)

const {idade, pais, cidade = 'São Paulo'} = pessoa

// console.log(idade)
// console.log(pais)
// console.log(cidade)

const save = ({name, idade}) => {
    console.log(name)
    console.log(idade)

}
save(pessoa)

// Criar um CLI usando YARGS
// Vai receber um parâmetro de entrada que será o código do ativo na bolsa de valores
// Se não receber o ativo, retornar um erro
// Se receber, deve consultar o ativo usando o request
// Devolver o valor de abertura, de fechamento, maior alta e menor baixa do dia
// Mostrar os valores de baixa em vermelho com chalk
// Mostrar os valores de alta em azul
// Utilizar arrow function
// Utilizar es6
// Utilizar destruct