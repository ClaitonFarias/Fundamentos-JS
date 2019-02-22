const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])

//Usando um index que não existe ele não gera erro e diz estar indefinido
console.log(valores[4])

//Podemos definir um valor para algum index
valores[4] = 10
console.log(valores[4])

//Se definirmos um valor para um index com outros em branco no meio
//ele vai informar quantos estão em branco no meio
valores[10] = 10
console.log(valores)

//Para saber a quantidade de elementos de um Array usamos o length
console.log(valores.length)

//Array permite colocar objetos, booleans, null, textos, 
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

//.pop função que retira do array o seu último valor
console.log(valores.pop())

//delete exclui o elemento do index informado
delete valores[0]
console.log(valores)

//Array é do tipo objeto
console.log(typeof valores)