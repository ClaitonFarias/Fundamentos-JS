const funcs = []

for (var i = 0; i < 10; i++) 
{
    funcs.push(function (){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

//Obterremos nos dois funcs o valor de 10, ele não trás o valor atribuído no index solicitado