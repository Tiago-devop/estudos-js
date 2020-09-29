// Por meio das operações call e apply é possível invocar uma 
// função passando o this por parâmetro
const calculateArea = function (fn) {
    return fn(Math.PI * Math.pow(this.radius, 2))
}

const circle = {
    radius: 10,
    calculateArea
}
console.log(calculateArea.apply(circle, [Math.ceil]))
console.log(calculateArea.call(circle, Math.round))