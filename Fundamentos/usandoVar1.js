{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}

console.log(sera) //Vai trazer o resultado também

function teste() {
    var local = 123
    console.log(local) //Vai dar o resultado
}

teste()
// Colocando o console.log(local) aqui não trás o resultado, pois fechamos a função na linha acima.

//Uma variável declarada fora d euma função ela é global. Ela fica dentro de um Window e quando
//se declara novamente um valor para a mesma variável ela sobrescreve. Tema vantagem apenas de 
//chamar a variável de qualquer lugar.