import { curry1 } from './Curry';
export interface MIN {
    (x: number[]): number;
    (): (x: number[]) => number;
}
const min = curry1(function (num: number[]) {
    return Math.min.apply(null, [...new Set(num)]);
}) as MIN;
export default min;
