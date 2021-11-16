
let numero = 32

console.log(esPrimo(numero));
console.log(esPrimo(numero+1));
console.log(esPrimo(numero+5));
console.log(esPrimo(numero+7));

function esPrimo(num) {
    let contDivisores = 0
    for (let i = 1; i <= num; i++) {
        if (num % i == 0)  {
            contDivisores = contDivisores +1 
        }        
    }

    if (contDivisores == 2) {
        return true
    }

    return false
}

