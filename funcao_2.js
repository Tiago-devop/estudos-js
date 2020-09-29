// No JavaScript, as funções são de primeira classe, ou seja, podem ser atribuídas
// a uma variável, passadas por parâmetro ou serem retornada de uma outra função

const sum = function (a, b) {
    return a + b
}

const subtract = function (a, b) {
    return a - b
}

const calculator = function (fn) {
    return function (a, b) {
        return fn(a, b)
    }
}

console.log(calculator(sum)(5, 5))
console.log(calculator(subtract)(5, 5))