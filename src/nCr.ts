import { curry2 } from './Curry';
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
    if (n === 0 || r === 0) {
        return NaN;
    }
    let x = 0,
        z = r,
        y = n,
        age = 1;
    while (x == 0) {
        if (r == 1) {
            y *= r;
        }
        r--;
        if (r == 0) {
            x++;
        } else {
            n--;
            if (n == 0) {
                x++;
                break;
            }
            y *= n;
        }
    }
    for (let i = 2; i <= z; i++) {
        age *= i;
    }
    y /= age;
    return y;
}) as NCR;
export default nCr;
