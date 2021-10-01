import { curry1 } from './Curry';
export interface PRIMEFACTORIZATION {
    (a: number): {
        number: number;
        count: number;
    }[];
    (): (a: number) => {
        number: number;
        count: number;
    }[];
}
/**
 * 素因数分解
 */
const primeFactorization = curry1(function (x: number) {
    let n = 0;
    const out: { number: number; count: number }[] = [];
    for (let i = 2; i <= x; i++) {
        if (x % i === 0) {
            n = 0;
            while (x % i === 0) {
                n++;
                x /= i;
            }
            out.push({ number: i, count: n });
        }
    }
    return out;
}) as PRIMEFACTORIZATION;
export default primeFactorization;
