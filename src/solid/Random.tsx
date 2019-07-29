export class Random {
    min: number;
    max: number;

    constructor(min: number, max: number) {
        this.min = min;
        this.max = max;
    }

    generate(): number {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    }
}
