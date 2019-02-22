var numero = 1
{
    var numero = 2
    console.log('Dentro =',numero)
}
console.log('Fora =', numero)

//Chamando dentro ou fora vai trazer o número dois, pois o var sobrescreve o conteúdo e como não
//está dentro de um function é o que vai ocorrer.