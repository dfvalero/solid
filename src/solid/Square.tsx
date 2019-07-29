import { ShapeInterface } from "./ShapeInterface";

export class Square implements ShapeInterface {
    length: number;

    constructor(length: number) {
        this.length = length;
    }

    area():number {
        return Math.pow(this.length, 2)
    }

    perimeter(): number {
        return 4 * this.length;
    }
}
