const nome = 'Claiton'
const concatenacao = 'Olá ' + nome + '!'
//permite formatação para uma string, respeitando paragráfo 
//e quebra de linha `
const template = ` 
    Olá
    ${nome} é hora de continuar o curso de JS!`
console.log(concatenacao, template)

//expressões...
//Irá resolver a expressão que está dentro do ${}
console.log(`1 +1 = ${1 +1}`)

//função up declarando que o texto será upper case e depois sendo 
//chamada dentro do console.log
const up = texto => texto.toUpperCase()
console.log(`Ei.....${up('cuidado')}!`)