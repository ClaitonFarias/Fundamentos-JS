//Constante escola declarada
const escola = "Cod3r"

//Retorna letra da posição 4 iniciando do zero, trás o r
console.log(escola.charAt(4))

//Quando não tem caracter para apresentar, trás em branco
console.log(escola.charAt(5))

//Trás o código do digito 3 na tabela Unicode
console.log(escola.charCodeAt(3))

console.log(escola.indexOf('3'))

//Trás todos os índices a partir do índice 1
console.log(escola.substring(1))
//Pega do índice zero até o índice 3
console.log(escola.substring(0, 3))

//Concatenando
console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola +  "!")

//Replace 0 3 por e
console.log(escola.replace(3 , 'e'))

//Coloca o conteúdo da String entre aspas separando por , e espaçamento
//[ 'Ana', 'Maria', 'Pedro' ]
console.log('Ana,Maria,Pedro'.split(','))

