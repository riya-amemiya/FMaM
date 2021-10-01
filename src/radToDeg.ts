import { curry1 } from './Curry';
export interface RADTODEG {
    (x: number): void;
    (): (x: number) => void;
}
const radToDeg = curry1(function (x: number) {
    return x / (Math.PI / 180);
}) as RADTODEG;
export default radToDeg;
