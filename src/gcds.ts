import gcd from './gcd';
export interface GCDS {
    (x: number, y: number, ...z: number[]): number;
    (x: number): (y: number, ...z: number[]) => number;
    (): (x: number, y: number, ...z: number[]) => number;
}
/**
 * 3つ以上の自然数の最大公約数
 */
const gcds = function (x?: number, y?: number, ...z: number[]) {
    if (typeof x === 'undefined') {
        return (x: number, y: number, ...z: number[]) => gcds(x, y, ...z);
    }
    if (typeof y === 'undefined') {
        return (y: number, ...z: number[]) => gcds(x, y, ...z);
    }
    let n: number = gcd(x, y);
    for (let i = 0; i < z.length; i++) {
        n = gcd(n, z[i]);
    }
    return n;
} as GCDS;
export default gcds;
