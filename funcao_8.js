// Na linguagem JavaScript, toda função permite a utilização de variáveis que não foram 
// declaradas e nem passadas por parâmetro

// O problema é que como as funções são de primeira classe, dependendo da situação poderia
// existir uma ambiguidade e isso foi resolvido com o conceito de closure

function fn1() {
    let v1 = 10
    return function () {
        console.log(v1)
    }
}
const fn2 = fn1()
let v1 = 100
fn2()
