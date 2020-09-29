// É possível invocar uma função com menos ou mais parâmetros, não
// necessariamente seguindo o que está declarado

const sum = function (a, b) {
    return a + b
}

console.log(sum(2, 2))
console.log(sum(2))
console.log(sum(1, 2, 3))