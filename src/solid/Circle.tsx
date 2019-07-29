import { ShapeInterface } from "./ShapeInterface";

export class Circle implements ShapeInterface {
    radius: number;

    constructor (radius: number) {
        this.radius = radius;
    }

    area(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}
