import { curry3 } from './Curry';
import reduce from './reduce';
export interface REPEATEDTRIAL {
    (
        n: number,
        r: number,
        p: {
            x: number;
            y: number;
        },
    ): number[];
    (n: number, r: number): (p: { x: number; y: number }) => number[];
    (n: number): (
        r: number,
        p: {
            x: number;
            y: number;
        },
    ) => number[];
}
/**
 * 反復的な思考
 * @param  {number} n
 * @param  {number} r
 * @param  {{x:number;y:number}} p
 */
const repeatedTrial = curry3(function (n: number, r: number, p: { x: number; y: number }) {
    const x = [p.x ** r, p.y ** r];
    const y = [(p.y - p.x) ** (n - r), p.y ** (n - r)];
    p.x = x[0] * y[0] * 10;
    p.y = x[1] * y[1];
    const z = reduce(p.x, p.y);
    return [z.x, z.y];
}) as REPEATEDTRIAL;
export default repeatedTrial;
