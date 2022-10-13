function odd(n) {

    if (n == 0) return;

    if ((n % 3 == 0) && (n % 5 == 0)) {
        console.log("Fizz Buzz");
    }
    else if (n % 5 == 0) {
        console.log("Buzz");
    }
    else if (n % 3 == 0) {
        console.log("Fizz");
    }
    else {
        console.log(n)
    }
    odd(n - 1);
}

odd(100)