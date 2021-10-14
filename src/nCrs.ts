import { curry2 } from './Curry';
import nCr from './nCr';
export interface NCRS {
    (n: number, r: number): number;
    (n: number): (r: number) => number;
}
/**
 * 重複を許して取り出す
 * @param  {number} n
 * @param  {number} r
 */
const nCrs = curry2(function (n: number, r: number) {
    if (n === 0 || r === 0) {
        return NaN;
    }
    const y = nCr(n + r - 1, r);
    if (1 > y) return 0;
    return y;
}) as NCRS;
export default nCrs;
