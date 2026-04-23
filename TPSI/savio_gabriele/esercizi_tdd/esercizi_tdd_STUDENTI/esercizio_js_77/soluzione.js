export class Fibonacci {

    calc(n) {
        if (n === 0) return 0;
        if (n === 1) return 1;
        return this.calc(n - 1) + this.calc(n - 2);
    }
}