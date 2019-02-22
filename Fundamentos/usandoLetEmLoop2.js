const funcs = []

for (let i = 0; i < 10; i++) 
{
    funcs.push(function (){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

//Obterremos o valor correspondente ao index solicitados, pois o let está dentro do bloco