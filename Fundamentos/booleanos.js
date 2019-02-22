let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
//Um ! negação, dois !! negação da negação. 
console.log(!isAtivo)

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos....')
console.log(!!0)
console.log(!!'')
console.log(!!null)//nulo
console.log(!!NaN)//Not a number, não é um número
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para finalizar....')
console.log(!!('' || null || 0 || ' '))//pelo menos um é verdadeiro
//retorna o conteúdo do que é verdadeiro
console.log(('' || null || 0 || ' '))
console.log(('' || null || 0 || 'epa'))

//Expressão ou, se o nome estiver preenchido retorna o nome se não
//retorna desconhecido
let nome = ''
console.log(nome || 'Desconhecido')

nome = 'Lucas'
console.log(nome || 'Desconhecido')