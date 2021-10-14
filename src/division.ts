import { curry2 } from './Curry';
import getDecimalLength from './getDecimalLength';
export interface DIVISION {
    (x: number, y: number): number[];
    (x: number): (y: number) => number[];
}
/**
 * 誤差のない割り算
 * @param  {number} x
 * @param  {number} y
 */
const division = curry2(function (x: number, y: number) {
    const n = 10 ** (getDecimalLength(x) + getDecimalLength(y));
    x = +(x + '').replace('.', '');
    y = +(y + '').replace('.', '');
    return [x / y / n, (x % y) / n];
}) as DIVISION;
export default division;
