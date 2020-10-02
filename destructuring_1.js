// Por meio do destructuring podemos extrair valores de arrays e objetos
// de uma forma mais simples e direta

/*
const language = 'C;Dennis Ritchie;1972'.split(';')
console.log(language)
const name = language[0]
const author = language[1]
const year = language[2]
console.log(name, author, year)
*/

// É possivel extrair os valores de uma array criando variáveis em
// ordem, de acordo com a posição de cada elemento

const [name, author, year] = 'C;Dennis Ritchie;1972'.split(';')
console.log(`${name}\n${author}\n${year}`)