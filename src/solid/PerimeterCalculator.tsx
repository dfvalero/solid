import {AreaCalculator} from "./AreaCalculator";

export class PerimeterCalculator extends AreaCalculator {
    sum(): number {
        const perimeter = this.shapes.map(shape => shape.perimeter());

        return perimeter.reduce((accumulative, value) => accumulative + value, 0);
    }
}
