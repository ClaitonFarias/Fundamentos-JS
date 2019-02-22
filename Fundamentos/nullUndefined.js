let valor //não inicializa, sem declaração, vai iniciar com undefined
console.log(valor)
//Tratá como is not defined, não foi nem declarada.
//console.log(valor2)

valor = null //ausência de valor
console.log(valor)
//Erro! Não podemos ler a propriedade String de um campo null
//console.log(valor.toString())


const produto = {}
console.log(produto.preco)//Teremos que o preço é undefined e o produto como nulo

//Agora teremos preço
produto.preco = 3.50
console.log(produto)

//Atribuindo o Undefined, não é aconselhável setar, 
//deixa a linguagem definir o que é Undefined
produto.preco = undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null
console.log(!!produto.preco)