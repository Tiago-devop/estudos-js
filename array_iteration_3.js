// Os iteration methods quando invocados iteram sobre os elementos do array

// find Retorna o primeiro elemento que retornou
//  true na função passada por parâmetro

const frameworks = [
    {
        name: 'Angular.js',
        contributors: 2010
    },
    {
        name: 'Ember.js',
        contributors: 700
    },
    {
        name: 'Vue.js',
        contributors: 210
    }
]
const result = frameworks.find(function (framework) {
    return framework.name === 'Angular.js'
})
console.log(result)