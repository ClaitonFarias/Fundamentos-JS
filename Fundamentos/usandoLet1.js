//Temos esocpos diferentes, o let está dentro de um bloco e o var fora, assim mesmo tendo o mesmo
//nome 'numero', teremos valores diferentes.

    var numero = 1
{
    let numero =2
    console.log('Dentro = ', numero)
}
    console.log('Fora = ', numero)

//Se trocar o var de fora por let vai trazer resultado diferente, pois estão em escopos diferentes

let numero = 1
{
    let numero = 2
    console.log('Dentro = ', numero)
}
    console.log('Fora = ', numero)

//Se a variável chamada não existir dentro do bloco ele procura no escopo mais abrangente, 
//retornando o mesmo valor duas vezes.

let numero = 1
{
    let numero2 = 2
    console.log('Dentro = ', numero)
}
    console.log('Fora = ', numero)