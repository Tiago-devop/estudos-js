// Toda função tem uma variável this que contém a referência para o objeto
// responsável pela sua invocação

const obj1 = {
    p1: 10,
    getP1: function () {
        const that = this
        const fn1 = () => that.p1
        return fn1()
    }
}
console.log(obj1.getP1())