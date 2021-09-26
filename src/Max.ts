import { curry1 } from './Curry';
export interface MAX {
    (x: number[]): number;
    (): (x: number[]) => number;
}
const max = curry1(function (num: number[]) {
    return Math.max.apply(null, [...new Set(num)]);
}) as MAX;
export default max;
