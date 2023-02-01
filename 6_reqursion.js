const factorial = (n) => {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log('Фактриал')
console.log(factorial(5));
console.log('-------')

// Числа Фибоначчи - 1, 1, 2, 3, 5, 8, 13, 21

const fibonachi = (n) => {
    if (n === 1 || n === 2) {
        return 1;
    }
    return fibonachi(n-1) + fibonachi(n - 2);
}

console.log('Фибоначчи')
console.log(fibonachi(8));
console.log('-------')