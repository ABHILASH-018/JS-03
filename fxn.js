
export function SUM(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    console.log("Sum of first " + n + " numbers: " + sum);
}


export function Table(n) {
    console.log("Table of " + n + ":");
    for (let i = 1; i <= 10; i++) {
        console.log(n + " x " + i + " = " + (n * i));
    }
}

export function prime(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            count++;
        }
    }
    if (count == 2) {
        console.log("Is " + n + " a prime number: YES");
    } else {
        console.log("Is " + n + " a prime number: NO");
    }
}


export function factors(n) {
    console.log("Factors of " + n + ":");
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            console.log(i);
        }
    }
}


export function sumOfDigits(n) {
    let sum = 0;
    let temp = n;

    while (temp > 0) {
        let digit = temp % 10;
        sum = sum + digit;
        temp = Math.floor(temp / 10);
    }

    console.log("Sum of digits of " + n + ": " + sum);
}


export function Armstrong(n) {
    let original = n;
    let digits = n.toString().length;
    let sum = 0;

    while (n > 0) {
        let digit = n % 10;
        sum = sum + (digit ** digits);
        n = Math.floor(n / 10);
    }

    if (sum === original) {
        console.log(original + " is an Armstrong Number");
    } else {
        console.log(original + " is NOT an Armstrong Number");
    }
}
