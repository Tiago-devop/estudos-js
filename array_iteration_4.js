// Os iteration methods quando invocados iteram sobre os elementos do array

// some Retorna true se um ou mais elementos retornaram
//  true na função passada por parâmetro

// every Retorna true se todos os elementos retornaram true 
// na função passada por parâmetro

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
const result = frameworks.every(function (framework) {
    return framework.contributors > 1000
})
console.log(result)