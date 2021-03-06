import { curry1 } from './Curry';
import division from './division';
export interface ISPRIMENUMBER {
    (x: number): boolean;
    (): (x: number) => boolean;
}
/**
 * 素数判定
 * @param  {number} n
 */
const isPrimeNumber = curry1(function (n: number) {
    if (n < 2) return false;
    else if (n == 2) return true;
    else if (n % 2 == 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i++) {
        if (division(n, i)[1] == 0) {
            return false;
        }
    }
    return true;
}) as ISPRIMENUMBER;
export default isPrimeNumber;
