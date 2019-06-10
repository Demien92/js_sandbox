///1
class Human {
    constructor({name, age}) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}, i am ${this.age} years old`);
    }
}
class AlevelStudent extends Human {
    constructor({name, age, marks}) {
        super({name, age});
        this.marks = Array.isArray(marks) ? marks : [];
    }

    averageMark() {
        if (this.marks.length) {
            return this.marks.reduce((sum, item) => sum + item, 0) / this.marks.length;
        }

        return this.marks;
    }
}
///2
class Calculator {
    constructor() {
        this.sum = 0;
    }

    add(num) {
        if (Number.isFinite(num)) {
            this.sum += num;
        }
        return this;
    }

    sub(num) {
        if (Number.isFinite(num)) {
            this.sum -= num;
        }
        return this;
    }

    mul(num) {
        if (Number.isFinite(num)) {
            this.sum *= num;
        }
        return this;
    }

    div(num) {
        if (Number.isFinite(num)) {
            this.sum /= num;
        }
        return this;
    }

    pow(num) {
        if (Number.isFinite(num)) {
            this.sum = Math.pow(this.sum, num);
        }
        return this;
    }

    sqrt() {
        this.sum = Math.sqrt(this.sum);
        return this;
    }

    reset() {
        this.sum = 0;
        return this;
    }

    getResult() {
        return this.sum;
    }
}
///3
class Point {
    constructor(x = 0, y = 0) {
        this.x = !Number.isFinite(x) ? 0 : x;
        this.y = !Number.isFinite(y) ? 0 : y;
    }


    toString() {
        return `Point[${this.x} ${this.y}]`;
    }

    set(x, y) {
        this.x = !Number.isFinite(x) ? 0 : x;
        this.y = !Number.isFinite(y) ? 0 : y;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }
}
class Line {
    constructor(point1, point2) {
        this.point1 = point1;
        this.point2 = point2;
    }

    toString() {
        return `Line(${this.point1} - ${this.point2})`;
    }

    length() {
        return Math.sqrt(Math.pow(this.point2.x - this.point1.x, 2) + Math.pow(this.point2.y - this.point1.y, 2))  //√(xb - xa)2 + (yb - ya)2
    }
}
class WeightedPoint extends Point {
    constructor(x, y, weight) {
        super(x, y);
        this.weight = !Number.isFinite(weight) ? 0 : weight;
    }

    toString() {
        return `${this.weight}&Point[${this.x} ${this.y}]`;
    }

    set(x, y, weight) {
        this.x = x;
        this.y = y;
        this.weight = weight;
    }

    getWeight() {
        return this.weight;
    }
}
///4
class CalculatorExtended extends Calculator {
    constructor() {
        super();
        this.history = 0;
        this.symbol = true;
    }

    isPriority(value) {
        return this.symbol = value;
    }

    add(num = 0) {
        if (Number.isFinite(num)) {
            super.add(num);
        }
        this.history = `${this.history} + ${num}`;
        this.isPriority(true);
        return this;
    }

    sub(num = 0) {
        if (Number.isFinite(num)) {
            super.sub(num);
        }
        this.history = `${this.history} - ${num}`;
        this.isPriority(true);
        return this;
    }

    mul(num = 0) {
        if (Number.isFinite(num)) {
            super.mul(num);
        }
        this.history = this.symbol ? `(${this.history}) * ${num}` : `${this.history} * ${num}`;
        this.isPriority(false);
        return this;
    }

    div(num = 0) {
        if (Number.isFinite(num)) {
            super.div(num);
        }
        this.history = this.symbol ? `(${this.history}) / ${num}` : `${this.history} / ${num}`;
        this.isPriority(false);
        return this;
    }

    pow(num = 0) {
        if (Number.isFinite(num)) {
            super.pow(num);
        }
        this.history = `(${this.history}) ^ ${num}`;
        this.isPriority(true);
        return this;
    }

    sqrt() {
        this.sum = Math.sqrt(this.sum);
        this.history = `√(${this.history})`;
        this.isPriority(true);
        return this;
    }

    reset() {
        this.sum = 0;
        this.history = this.sum;
        this.isPriority(false);
        return this;
    }

    toString() {
        return `${this.history} = ${this.sum}`;
    }
}
///5
function withUniqueID(parentClass) {
    let count = 0;
    return class NewClass extends parentClass{
        constructor(param) {
            super(param);
            this.id = count+=1;
        }
    }
}
