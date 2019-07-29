export class SumCalculatorOutputter {
    total: number;
    type: string;

    constructor(total: number, type: string) {
        this.total = total;
        this.type = type;
    }

    toString(): string {
        return `Total ${this.type}: ${this.total}`;
    }

    log(): undefined {
        console.log(`Total ${this.type}: ${this.total}`);
        return;
    }
}
