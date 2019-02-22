//Vai jogar a variável para cima trazaendo que ela está indefinida no primeiro console e no 
//segundo trará o valor. Como se tivéssemos antes do primeiro console a declaração de var a
console.log('a =', a)
var a = 2
console.log('a =', a)

//Se estiver dentro da função irá ocorrer o mesmo

function teste() {
    console.log('a =', a)
    var a = 2
    console.log('a =', a)
}

teste()

//Se usar o let não irá ocorrer o hosting, gera erro de variável não estar declarada.

console.log('b =', b)
let b = 2
console.log('b =', b)