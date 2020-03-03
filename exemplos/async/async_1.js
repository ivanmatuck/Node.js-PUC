console.log('primeiro')
setTimeout(() => {
    console.log('Depois de 2 segundos')
    setTimeout(() => {
        console.log('Depois de 1 segundo')
    }, 1)
    console.log('outra mensagem depois do tempo')
}, 2000)

console.log('segundo')
setTimeout(() =>{
    console.log('0 segundos')
}, 0)

console.log('terceiro')