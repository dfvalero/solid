import { Random } from './Random';
import { Circle } from './Circle';
import { Square } from './Square';
import { AreaCalculator } from './AreaCalculator';
import { SumCalculatorOutputter } from './SumCalculatorOutputter';

const circle = new Circle(new Random(1, 10).generate());
const square = new Square(new Random(1, 10).generate());
const areaCalculator = new AreaCalculator([circle, square]);
const total = areaCalculator.sum();
const outputter = new SumCalculatorOutputter(total);

outputter.log();

export default outputter.JSON().total;
