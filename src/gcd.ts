import { curry2 } from './Curry';
import valueSwap from './valueSwap';
export interface GCD {
    /**
     * 最大公約数
     * @param  {number} x
     * @param  {number} y
     */
    (x: number, y: number): number;
    /**
     * 最大公約数
     * @param  {number} x
     */
    (x: number): (y: number) => number;
}

const gcd = curry2(function (x: number, y: number) {
    if (x === 0 || y === 0) return 0;
    [x, y] = valueSwap(x, y);
    /* ユークリッドの互除法 */
    let r = y % x;
    while (r !== 0) {
        y = x;
        x = r;
        r = y % x;
    }
    return x;
}) as GCD;
export default gcd;
