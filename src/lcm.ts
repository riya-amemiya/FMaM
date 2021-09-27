import { curry2 } from './Curry';
import gcd from './gcd';
import valueSwap from './valueSwap';
export interface LCM {
    (x: number, r: number): number;
    (x: number): (r: number) => number;
}
/**
 * 最小公倍数
 * @param  {number} n
 * @param  {number} r
 */
const lcm = curry2(function (n: number, r: number) {
    if (n === 0 || r === 0) {
        return 0;
    }
    [n, r] = valueSwap(n, r);
    return (n / gcd(n, r)) * r;
}) as LCM;
export default lcm;
