const a = 7
let b = 3

b +=a //Não estamos substituindo o valor de b pelo a e sim: b = b + a
console.log(b)

b -= 4 //b = b - 4
console.log(b)

b *= 2 //b = b * 2
console.log(b)

b /= 2 // b = b / 2
console.log(b)

b %= 2 //b = b % 2 (Resto da divisão de b por dois, 
       //se for par será zero, se for valor ímpar será valor 1)
console.log(b)