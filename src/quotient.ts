import { curry2 } from './Curry/curry2';
export interface QUOTIENT {
    (x: number, y: number): number[];
    (x: number): (y: number) => number[];
}
/**
 * あまりの割り算
 * @param  {number} x
 * @param  {number} y
 */
const quotient = curry2(function (x: number, y: number) {
    return [(x - (x % y)) / y, (x % y) + 0];
}) as QUOTIENT;
export default quotient;
