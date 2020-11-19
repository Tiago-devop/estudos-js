const readline = require('readline')
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.question('qual seu nome ? ', function(name) {
    r1.question('Onde você mora ? ', function(country) {
        console.log(`${name}, é da cidade de ${country}`)
        r1.close()
    })
})

r1.on('close', function() {
    console.log('\nATE MAIS !!!')
    process.exit(0)
})