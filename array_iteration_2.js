// Os iteration methods quando invocados iteram sobre os elementos do array

// filter Retorna um novo array contendo somente os elementos
//  que retornaram true na função passada por parâmetro
const frameworks = [
    {
        name: 'Angular.js',
        contributors: 2010
    },
    {
        name: 'Angular.js',
        contributors: 700
    },
    {
        name: 'Vue.js',
        contributors: 210
    }
]
const result = frameworks.filter(function (framework) {
    return framework.contributors < 1000
})
console.log(result)