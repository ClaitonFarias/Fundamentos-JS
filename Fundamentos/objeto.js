const prod1 = {}
prod1.Nome = 'Celula Ultra Mega'
prod1.Preço = 4998.90 //Assim vai suprimir o zero na impressão
prod1['Desconto Legal'] = 0.4 //Evitar usar atributos com espaços
console.log(prod1)

//Para que o valor respeite as duas casas após a vírgula devemos 
//declarar no Preço e não no console.
prod1.Preço = 4998.90.toFixed(2)
console.log(prod1)

const prod2 = {
    Nome: 'Camisa Polo',
    Preço: 79.90.toFixed(2)
               }
console.log(prod2)