import { Random } from './Random';
import { Circle } from './Circle';
import { Square } from './Square';
import { AreaCalculator } from './AreaCalculator';
import { SumCalculatorOutputter } from './SumCalculatorOutputter';
import {PerimeterCalculator} from "./PerimeterCalculator";

const circle = new Circle(new Random(1, 10).generate());
const square = new Square(new Random(1, 10).generate());
const areaCalculator = new AreaCalculator([circle, square]);
const totalArea = areaCalculator.sum();
const perimeterCalculator = new PerimeterCalculator([circle, square]);
const totalPerimeter = perimeterCalculator.sum();
const areaOutputter = new SumCalculatorOutputter(totalArea, 'Area');
const perimeterOutputter = new SumCalculatorOutputter(totalPerimeter, 'Perimeter');

areaOutputter.log();
perimeterOutputter.log();

export default {
    totalArea: areaOutputter.toString(),
    totalPerimeter: perimeterOutputter.toString()
};
