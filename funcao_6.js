// Também é possivel acessar os parâmetros da função invocada por
// meio do rest parameter
// o rest parameter deve ser sempre o ultimo parâmetro

const sum = function (...numbers) {
    let total = 0
    for (let number of numbers) {
        total += number
    }
    return total
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9))