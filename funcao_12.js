// O execution Context é o ambiente onde o código é executado, sendo composto pelo
// variable object, scope chain e this

// Dentro de uma função é possivel acessar variáveis existentes fora 
// dela, por meio da scope chain

const v1 = 10
const fn1 = function () {
    const v1 = 100
    const fn2 = function () {
        const v1 = 1000
        console.log(v1)
    }
    fn2()
}
fn1()