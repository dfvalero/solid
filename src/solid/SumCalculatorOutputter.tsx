type JSON = {
    total: number
}

export class SumCalculatorOutputter {
    total: number;

    constructor(total: number) {
        this.total = total;
    }

    JSON(): JSON {
        return {
            total: this.total
        };
    }

    log(): undefined {
        console.log(`Total: ${this.total}`);
        return;
    }
}
