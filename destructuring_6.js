// Podemos aplicar destructuring também nos parâmetros de uma 
// função, tanto com arrays quanto com objetos

const sum = function ({ a, b }) {
    return a + b
}
console.log(sum({ a: 2, b: 2 }))