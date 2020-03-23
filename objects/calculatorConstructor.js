class Calculator {
    constructor(values) {
        this.values = values;
    }
    sum() {
        return this.values.reduce((prev, curr) => prev + curr, 0);
    };
    sub(minuendoInd, sottraendoInd) {
        return this.values[minuendoInd] - this.values[sottraendoInd];
    };
    mul() {
        return this.values.reduce((prev, curr) => prev * curr, 1);
    };
    div(dividendoInd, divisoreInd) {
        if (this.values[divisoreInd] === 0) return Infinity;
        else return this.values[dividendoInd] / this.values[divisoreInd];
    };
}
let calculator = new Calculator([1, 2, 3, 4, 5]);
console.log(calculator.sum());
console.log(calculator.sub(4, 3));
console.log(calculator.mul());
console.log(calculator.div(2, 0));