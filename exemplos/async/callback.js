

/* const getPrice = (symbol, callback) => {
    setTimeout(() =>{
        const data = {
            symbol: 'PETR4.SA',
            price: 38
        }
        callback(data)
    }, 2000)
    
} */

const add = (a, b, callback) => {
    setTimeout(() => {
        const soma = a + b
        callback(soma)
    }, 3000)
}

add(2, 8, (soma) =>{
    console.log(soma)
})


/* getPrice('PETR4.SA', (data) => {
    console.log(data)
}) */