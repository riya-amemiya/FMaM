import { curry2 } from './Curry';
import gcd from './gcd';
import valueSwap from './valueSwap';
export interface LCM {
    (x: number, y: number): number;
    (x: number): (y: number) => number;
}
/**
 * 最小公倍数
 * @param  {number} x
 * @param  {number} y
 */
const lcm = curry2(function (x: number, y: number) {
    if (x === 0 || y === 0) {
        return 0;
    }
    [x, y] = valueSwap(x, y);
    return (x / gcd(x, y)) * y;
}) as LCM;
export default lcm;
