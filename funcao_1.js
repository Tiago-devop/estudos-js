// function declaration sofre hoisting
function sum(a, b) {
    return a + b
}
console.log(sum(5, 2))

// function expression
const somar = function (a, b) {
    return a + b
}
console.log(somar(5, 7))