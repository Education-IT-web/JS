"use strict"
let calculator = {
    numA: 0,
    numB: 0,
    read(a, b) {
        this.numA = a;
        this.numB = b;
    },
    sum() {
        return (this.numA + this.numB);
    },
    mul() {
        return (this.numA * this.numB);
    }
}
/*
calculator.read(2, 3);
console.log(calculator.sum());
console.log(calculator.mul());
*/


let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep(){
        console.log(this.step);
        return this;
    }
}
ladder.up().up().down().showStep();