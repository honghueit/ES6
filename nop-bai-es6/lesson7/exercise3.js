const fibonacci = n => {
    if (!Number.isInteger(n) || n < 3) {
        return 1;
    }

    let last1Value = 1, last2Value = 1, currentValue;

    for (let i = n - 2; i--; i > 0) {
        currentValue = last1Value + last2Value;
        last2Value = last1Value;
        last1Value = currentValue;
    }

    return currentValue;
};

console.log(fibonacci(100));
