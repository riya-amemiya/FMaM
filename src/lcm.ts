import { curry2 } from './Curry';
import { gcd } from './gcd';
export interface LCM {
    (x: number, r: number): number;
    (x: number): (r: number) => number;
}
/**
 * 最小公倍数
 * @param  {number} n
 * @param  {number} r
 */
export const lcm = curry2(function (n: number, r: number) {
    if (n === 0 || r === 0) {
        return 0;
    }
    let tmp: number;
    if (n < r) {
        tmp = n;
        n = r;
        r = tmp;
    }
    return (n / gcd(n, r)) * r;
}) as LCM;
