// É possível definir nomes diferentes para as variáveis
// em relação as chaves das propriedades do objeto

const language = {
    name: 'C',
    author: 'Dennis Ritchie',
    year: 1972
}
const { name: n, author: a, year: y } = language
console.log(n, a, y)