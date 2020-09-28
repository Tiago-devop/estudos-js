// match: Retorna partes da String com base na RegExp passada por parâmetro
console.log("C++".match(/\+/g))

// search: Retorna a primeira posição encontrada com base na RegExp passada por parâmetro
console.log("Java".search(/a/))

// replace: Retorna uma nova String resultante da substituição da String ou RegExp passada
// no primeiro parâmentro pelo segundo parâmetro
console.log("JavaScript".replace("Java", "Ecma"))
console.log("JavaScript".replace(/a/g, 4))