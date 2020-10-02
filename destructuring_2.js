// Assim como nas funções, é possível definir valores
// padrão para cada uma das variáveis

const language = 'C'.split(';')
const [name = '-', author = '-', year = '-'] = language
console.log(name, author, year)