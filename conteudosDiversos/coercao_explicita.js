const Hero = {
    name: '',
    age: 0,
    [Symbol.toPrimitive](type) {
        return JSON.stringify(this)
    },
}

const hero1 = { ...Hero, name: 'JUCA', age: 70 }
const heroCopy1 = { ...Hero, name: 'JUCA', age: 70 }
const otherHero = { ...Hero, name: 'SAPO CURURU', age: 500 }

console.log(hero1 + '')
console.log(hero1 + 1)
console.log(String(hero1) === String(heroCopy1))
console.log(String(hero1) == String(otherHero))