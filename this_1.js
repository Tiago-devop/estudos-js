// Existe uma variável implícita chamada de this que faz referência para o
// objeto responsável pela sua invocação
const calculateArea = function () {
    return this.x * this.y
}

const rectangle = {
    x: 10,
    y: 2,
    calculateArea
}
console.log(rectangle.calculateArea())
