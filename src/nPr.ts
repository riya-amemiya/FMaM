import { curry2 } from './Curry';

export interface NPR {
    (n: number, r: number): number;
    (n: number): (r: number) => number;
}
/**
 * nPr
 * @param  {number} n
 * @param  {number} r
 */
export const nPr = curry2(function (n: number, r: number) {
    //nPr
    if (n === 0 || r === 0) {
        return NaN;
    }
    let y = n,
        x = 0;
    while (x === 0) {
        if (r === 1) {
            y *= r;
        }
        r--;
        if (r === 0) {
            x++;
        } else {
            n--;
            if (n === 0) {
                x++;
                break;
            }
            y *= n;
        }
    }
    return y;
}) as NPR;
