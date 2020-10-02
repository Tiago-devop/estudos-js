// Os mutator methods quando invocados modificam o array

// unshift Remove um elemento no início
const languages = ['Python', 'C', 'Java']
console.log(languages)
console.log(languages.unshift('Ruby'))
console.log(languages)
console.log(languages.unshift('Go'))
console.log(languages)


// shift Remove um elemento do início
console.log(languages.shift())
console.log(languages)
console.log(languages.shift())
console.log(languages)