function sum() {
    const number = Array.from(arguments);
    return number.reduce(function (sum, num) {
        return sum + num;
    }, 0)
}

console.log(sum(1, 2, 5, 2));