function Calculator() {
    this.read = function () {
        this.numA = prompt("number A = ", 0);
        this.numB = prompt("number B = ", 0);
    };
    this.sum = function () {
        return this.numA + this.numB;
    };
    this.mul = function () {
        return this.numA * this.numB;
    };
}
let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        this.value += prompt("input value", 0);
    };
}