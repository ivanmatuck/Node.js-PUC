// const count = 5;
// console.log('count: %d', count);
// Prints: count: 5, to stdout
// console.log('count:', count);
// Prints: count: 5, to stdout

// console.log(`count: ${count}`);

// contar o tempo inicial
// 1000 * 1000

console.time('1000-iteracoes');
for (let i = 0; i < 1000; i++){
    for (let j = 0; j < 1000; j++){
        const a = i + j;
    }
}
console.timeEnd('1000-iteracoes');
// contar o tempo final

// imprimir na tela o resultado [o tempo total gasto]


