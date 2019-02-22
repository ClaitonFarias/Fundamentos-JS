// Função sem retorno
function imprimirSoma(a, b) { //Parâmetros da função
    console.log(a + b)
}
//Chamando a função de maneira correta
imprimirSoma(2, 3)
//Se chamar a função apenas com um parâmetro, teremos de retorno um NaN
imprimirSoma(2)
//Se chamar a função com mais parâmetros, ela vai considerar apenas os dois para o resultado
imprimirSoma(2, 3, 4, 5, 6, 7, 8)
//Se chamar a função sem passar parâmetros teremos o retorno de NaN
imprimirSoma()

//Função com retorno
function soma(a, b = 0) { //b=0 é declaração de um valor default para o b
    return a + b
}
console.log(soma(2, 3))
//chamando apenas com um parâmetro ele vai executar, se mudar o b=0 para b=1 vai somar o valor de b
//se não usar o parâmetro
console.log(soma(2))

//Se não informar nenhuma parâmetro teremos NaN