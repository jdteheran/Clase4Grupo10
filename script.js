
let numero = 32
let numero2 = 34
let numero3 = 37
let numero4 = 39

console.log(esPrimo(numero));
console.log(esPrimo(numero2));
console.log(esPrimo(numero3));
console.log(esPrimo(numero4));

function esPrimo(num) {
    let contDivisores = 0
    for (let i = 1; i <= num; i++) {
        if (num % i == 0 || false)  {
            contDivisores = contDivisores +1 
        }        
    }

    if (contDivisores == 2) {
        return true
    }

    return false
}

