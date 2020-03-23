let calculator = {
    values: [],
    sum() {
        return this.values.reduce((prev, curr) => prev + curr, 0);
    },
    sub(minuendoInd, sottraendoInd) {
        return this.values[minuendoInd] - this.values[sottraendoInd];
    },
    mul() {
        return this.values.reduce((prev, curr) => prev * curr, 1);
    },
    div(dividendoInd, divisoreInd) {
        if (this.values[divisoreInd] === 0) return Infinity;
        else return this.values[dividendoInd] / this.values[divisoreInd];
    }
}

calculator.values = [0, 1, 2, 3, 6, 8, 10];
console.log(calculator.sum());
console.log(calculator.sub(5, 3));
console.log(calculator.mul());
console.log(calculator.div(2, 0));