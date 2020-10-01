// Resumindo, closure é uma função com um scope chain estático que é definida no momento
// em que a função é criada, por isso, todas as funções na linguagem JavaScript são closures

let v1 = 10
function fn1() {
    console.log(v1)
}

function fn2(fn1) {
    v1 = 100
    fn1()
}

fn2(fn1)