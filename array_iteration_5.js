// Os iteration methods quando invocados iteram sobre os elementos do array

// map Retorna um novo array com base no retorno da função passada por parâmetro

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const result = numeros.map(numero => numero * 2)
console.log(result)