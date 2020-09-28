// slice: Retorna uma parte da String que está invocando a função iniciando na posição
// passada no primeiro parâmetro até a posição final passada no segundo parâmetro, ou
// da posição passada no primeiro parâmetro até o fim caso o segundo parâmetro
// não seja informado
console.log("JavaScript".slice(0, 4))
console.log("JavaScript".slice(4))
console.log("JavaScript".slice(0, -6)) // sinal negativo ele vai ao contrario
console.log("JavaScript".slice(-6))

// split: Retorna um array contendo o resultado da divisão da String original de acordo
// com o critério passado por parâmetro
console.log("C;Java;JavaScript;Ruby".split(";"))

// substring: Similar ao slice, não aceita valores negativos como parâmetro e permite
// a inversão dos parâmetros
console.log("JavaScript".substring(0, 4))
console.log("JavaScript".substring(4, 0))
console.log("JavaScript".substring(4))