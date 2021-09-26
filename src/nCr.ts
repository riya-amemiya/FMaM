import { curry2 } from './Curry';
import nPr from './nPr';
export interface NCR {
    (n: number, r: number): number;
    (n: number): (r: number) => number;
}
/**
 * nCr
 * @param  {number} n
 * @param  {number} r
 */
const nCr = curry2(function (n: number, r: number) {
    //nCr
    let y = nPr(n, r);
    let age = 1;
    for (let i = 2; i <= r; i++) {
        age *= i;
    }
    y /= age;
    if (1 > y) return 0;
    return y;
}) as NCR;
export default nCr;
