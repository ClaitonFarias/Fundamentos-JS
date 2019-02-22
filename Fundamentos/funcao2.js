// Armazenando uma função em uma variável ou constante
const imprimirSoma = function(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variável
const soma = (a, b) => { //=> substituí a expressão function
    return a + b
}

//Retorno implícito, bastante usado quando queremos apenas uma linha de solução.
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

//Quando é um parâmetro só não precisamos usar os parenteses e podemos diminuir mais a sintaxe
const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')