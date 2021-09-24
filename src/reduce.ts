import { curry2 } from './Curry';
import gcd from './gcd';
export interface REDUCE {
    (x: number, y: number): {
        x: number;
        y: number;
    };
    (x: number): (y: number) => {
        x: number;
        y: number;
    };
}
/**
 * 約分
 * @param  {number} x
 * @param  {number} y
 */
const reduce = curry2(function (x: number, y: number) {
    if (x === 0 || y === 0) {
        return { x: NaN, y: NaN };
    }
    let n = gcd(x, y);
    return { x: x / n, y: y / n, gcd: gcd(x, y) };
}) as REDUCE;
export default reduce;
