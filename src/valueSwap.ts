import { curry2 } from './Curry/curry2';
/**
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
});
export default valueSwap;
