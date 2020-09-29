// Por meio da variável implícita arguments é possivel
// acessar os parâmetros da função invocada

const sum = function() {
    let total = 0
    for (let argument in arguments) {
        total += arguments[argument]
    }
    return total
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9))