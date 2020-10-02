// Os mutator methods quando invocados modificam o array

// sort Ordena os elementos de acordo com a função de ordenação
const languages = [
    {
        name: 'Python',
        year: 1991
    },
    {
        name: 'C',
        year: 1972
    },
    {
        name: 'Java',
        year: 1995
    }
]
console.log(languages)
languages.sort((a, b) => a.year - b.year)
console.log(languages)