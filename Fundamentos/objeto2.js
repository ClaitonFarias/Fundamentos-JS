console.log(typeof Object)//Retorna que é uma Função
console.log(typeof new Object())//Retorna que é um objeto

const Cliente = function() {}
console.log(typeof Cliente)//Retorna que é uma função
console.log(typeof new Cliente)//Retorna que é um objeto

class Produto {}
console.log(typeof Produto)//Retorna que é uma função
console.log(typeof new Produto())//Retorna que é um objeto