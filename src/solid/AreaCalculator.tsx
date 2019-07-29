import { ShapeInterface } from "./ShapeInterface";

export class AreaCalculator {
    shapes: Array<ShapeInterface>;

    constructor(shapes:Array<ShapeInterface>) {
        this.shapes = shapes;
    }

    sum(): number {
        const area = this.shapes.map(shape => shape.area());

        return area.reduce((accumulative, value) => accumulative + value, 0);
    }
}
