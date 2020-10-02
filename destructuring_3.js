// Para extrair os valores de um objeto é necessário
// referenciar a chave de cada uma das propriedades

const language = {
    name: 'C',
    author: 'Dennis Ritchie',
    year: 1972
}
const { name, author, year } = language
console.log(name, author, year)