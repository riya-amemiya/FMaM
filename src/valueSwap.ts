import { curry2 } from './Curry/curry2';
export interface DIVISION {
    (a: number, b: number): number[];
    (a: number): (b: number) => number[];
}
/**
 * x < yになるように入れ替える
 * @param  {number} x
 * @param  {number} y
 */
const valueSwap = curry2(function (x: number, y: number) {
    let tmp: number;
    if (y < x) {
        tmp = y;
        y = x;
        x = tmp;
    }
    return [x, y];
}) as DIVISION;
export default valueSwap;
