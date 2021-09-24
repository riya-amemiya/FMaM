import { curry2 } from './Curry';
export interface GCD {
    (x: number, y: number): number;
    (x: number): (y: number) => number;
}
/**
 * 最大公約数
 * @param  {number} x
 * @param  {number} y
 */
const gcd = curry2(function (x: number, y: number) {
    if (x === 0 || y === 0) return 0;
    //最大公約数
    let r: number, tmp: number;
    if (y < x) {
        tmp = y;
        y = x;
        x = tmp;
    }
    /* ユークリッドの互除法 */
    r = y % x;
    while (r !== 0) {
        y = x;
        x = r;
        r = y % x;
    }
    return x;
}) as GCD;
export default gcd;
