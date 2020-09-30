// As arrow functions tem uma abordagem mais simples e direta para escrever uma
// função e podem melhorar a legibilidade do código em diversas situações
const sum = (a, b) => a + b

const subtract = (a, b) => a - b

const calculator = fn => (a, b) => fn(a, b)

console.log(calculator(sum)(2, 2))
console.log(calculator(subtract)(2, 2))